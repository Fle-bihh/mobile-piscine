import { EPalette } from "@/constants/colors.constants";
import { StyleSheet } from "react-native";

export default function useHourlyWeatherCardStyles() {
	const styles = StyleSheet.create({
		container: {
			alignItems: "center",
			padding: 12,
			borderRadius: 8,
			backgroundColor: EPalette.GreyOpacity,
			gap: 12,
		},
		hour: {
			color: EPalette.TextPrimary,
		},
		temperature: {
			color: EPalette.Primary,
			fontSize: 20,
		},
		wind: {
			color: EPalette.TextPrimary,
		},
	});
	const iconSize = 48;
	const iconColor = EPalette.Secondary;
	return { styles, iconColor, iconSize };
}
