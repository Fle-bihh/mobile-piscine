import { EPalette } from "@/constants/colors.constants";
import { useWindowDimensions, ViewStyle } from "react-native";
import { ChartConfig } from "react-native-chart-kit/dist/HelperTypes";
import { useMemo } from "react";
import useScreenOrientation, { EScreenOrientation } from "@/hooks/screen-orientation.hook";

export default function useTemperatureChartStyles() {
	const { width } = useWindowDimensions();
	const { orientation } = useScreenOrientation();

	const [padding, borderRadius] = useMemo(() => {
		if (orientation === EScreenOrientation.Portrait) {
			return [16, 8];
		}
		if (orientation === EScreenOrientation.Landscape) {
			return [64, 9];
		}

		return [16, 8];
	}, [orientation]);

	const chartWidth = useMemo(() => width - padding * 2, [width, padding]);

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

	const chartStyle: Partial<ViewStyle> = useMemo(
		() => ({
			paddingVertical: 16,
			paddingHorizontal: padding,
			borderRadius,
		}),
		[padding, borderRadius]
	);

	const yAxisSuffix = "°C";

	return { chartWidth, chartConfig, chartStyle, yAxisSuffix };
}
