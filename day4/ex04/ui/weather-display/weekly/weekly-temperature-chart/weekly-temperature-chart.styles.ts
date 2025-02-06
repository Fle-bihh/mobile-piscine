import { EPalette } from "@/constants/colors.constants";
import { useWindowDimensions } from "react-native";
import { ChartConfig } from "react-native-chart-kit/dist/HelperTypes";

export default function useWeeklyTemperatureChartStyles() {
	const { width } = useWindowDimensions();
	const chartConfig: ChartConfig = {
		backgroundGradientFrom: "white",
		backgroundGradientFromOpacity: 0.2,
		backgroundGradientTo: "white",
		backgroundGradientToOpacity: 0.2,
		color: () => EPalette.Primary,
		labelColor: () => EPalette.TextPrimary,
		strokeWidth: 1,
		decimalPlaces: 0,
	};
	const yAxisSuffix = "°C";
	return { width: width - 32, chartConfig, yAxisSuffix };
}
