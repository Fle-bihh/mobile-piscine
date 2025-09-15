import { LineChart } from "react-native-chart-kit";
import React from "react";
import { IChartTemperatures } from "@/types/weather.types";
import useTemperatureChartStyles from "./temperature-chart.styles";
import useChartTemperatures from "@/hooks/chart-temperatures.hook";

interface TemperaturChartProps {
	temperatures: IChartTemperatures;
}
export default function TemperaturChart({ temperatures }: TemperaturChartProps) {
	const { chartWidth, chartStyle, chartConfig, yAxisSuffix } = useTemperatureChartStyles();
	const { chartData } = useChartTemperatures(temperatures);

	return (
		<LineChart
			data={chartData}
			width={chartWidth}
			height={256}
			chartConfig={chartConfig}
			bezier
			yAxisSuffix={yAxisSuffix}
			withHorizontalLines
			withVerticalLines={false}
			fromZero
			style={chartStyle}
		/>
	);
}
