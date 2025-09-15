import { EPalette } from "@/constants/colors.constants";
import {
	IChartTemperatures,
	IHourlyChartTemperatures,
	EChartTemperatureType,
	IWeeklyChartTemperatures,
} from "@/types/weather.types";
import { useMemo } from "react";
import { LineChartData } from "react-native-chart-kit/dist/line-chart/LineChart";

export default function useChartTemperatures(temperatures: IChartTemperatures) {
	function isHourlyChart(temps: IChartTemperatures): temps is IHourlyChartTemperatures {
		return temps.type === EChartTemperatureType.Hourly;
	}

	function isWeeklyChart(temps: IChartTemperatures): temps is IWeeklyChartTemperatures {
		return temps.type === EChartTemperatureType.Weekly;
	}

	const getHourlyChartData = (tempData: IHourlyChartTemperatures) => {
		const temps = tempData.temperatures;
		const allLabels = temps.map((temperature) => temperature.hour);
		const labels = allLabels
			.filter((x, index) => index % 2 === 0)
			.filter((x, index) => index % 2 === 0);
		const temperaturesData = temps.map((temperature) => temperature.temperature);
		return {
			labels,
			datasets: [{ data: temperaturesData }],
			legend: ["Today temperatures"],
		};
	};

	const getWeeklyChartData = (tempData: IWeeklyChartTemperatures) => {
		const temps = tempData.temperatures;
		const labels = temps.map((temperature) => temperature.day);
		const minTemps = temps.map((temperature) => temperature.minTemp);
		const maxTemps = temps.map((temperature) => temperature.maxTemp);

		return {
			labels,
			datasets: [
				{ data: minTemps, color: () => EPalette.ColdBlue },
				{ data: maxTemps, color: () => EPalette.WarmRed },
			],
			legend: ["Min °", "Max °"],
		};
	};

	const data: LineChartData = useMemo(() => {
		if (isHourlyChart(temperatures)) {
			return getHourlyChartData(temperatures);
		} else if (isWeeklyChart(temperatures)) {
			return getWeeklyChartData(temperatures);
		}
		throw new Error("Invalid temperature chart type");
	}, [temperatures]);

	return {
		chartData: data,
	};
}
