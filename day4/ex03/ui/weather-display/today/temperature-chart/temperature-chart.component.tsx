import { LineChart } from "react-native-chart-kit";
import React, { useMemo } from "react";
import { ChartTemperature } from "@/types/weather.types";
import { LineChartData } from "react-native-chart-kit/dist/line-chart/LineChart";
import useTemperatureChartStyles from "./temperature-chart.styles";

interface TemperaturChartProps {
	temperatures: ChartTemperature[];
}
export default function TemperaturChart({ temperatures }: TemperaturChartProps) {
	const { width, chartConfig, yAxisSuffix } = useTemperatureChartStyles();

	const data: LineChartData = useMemo(() => {
		const allLabels = temperatures.map((temperature) => temperature.hour);
		const labels = allLabels
			.filter((x, index) => index % 2 === 0)
			.filter((x, index) => index % 2 === 0);
		const temperaturesData = temperatures.map((temperature) => temperature.temperature);
		return {
			labels,
			datasets: [{ data: temperaturesData }],
			legend: ["Today temperatures"],
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
