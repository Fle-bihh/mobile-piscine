import { LineChart } from "react-native-chart-kit";
import React, { useMemo } from "react";
import { WeeklyChartTemperature } from "@/types/weather.types";
import { LineChartData } from "react-native-chart-kit/dist/line-chart/LineChart";
import useWeeklyTemperatureChartStyles from "./weekly-temperature-chart.styles";
import { EPalette } from "@/constants/colors.constants";

interface WeeklyTemperatureChartProps {
	temperatures: WeeklyChartTemperature[];
}

export default function WeeklyTemperatureChart({ temperatures }: WeeklyTemperatureChartProps) {
	const { width, chartConfig, yAxisSuffix } = useWeeklyTemperatureChartStyles();

	const data: LineChartData = useMemo(() => {
		const labels = temperatures.map((temperature) => temperature.day);
		const minTemps = temperatures.map((temperature) => temperature.minTemp);
		const maxTemps = temperatures.map((temperature) => temperature.maxTemp);

		return {
			labels,
			datasets: [
				{ data: minTemps, color: () => EPalette.ColdBlue },
				{ data: maxTemps, color: () => EPalette.WarmRed },
			],
			legend: ["Min °", "Max °"],
		};
	}, [temperatures]);

	return (
		<LineChart
			data={data}
			width={width}
			height={256}
			chartConfig={chartConfig}
			bezier
			yAxisSuffix={yAxisSuffix}
			withHorizontalLines
			withVerticalLines={false}
			fromZero
			style={{ borderRadius: 8, padding: 16 }}
		/>
	);
}
