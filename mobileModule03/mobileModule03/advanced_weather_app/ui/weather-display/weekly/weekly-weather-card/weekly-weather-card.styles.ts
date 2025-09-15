import { EPalette } from "@/constants/colors.constants";
import { StyleSheet } from "react-native";

export default function useWeeklyWeatherCardStyles() {
	const styles = StyleSheet.create({
		container: {
			alignItems: "center",
			padding: 12,
			borderRadius: 8,
			backgroundColor: EPalette.GreyOpacity,
			gap: 12,
		},
		day: {
			color: EPalette.TextPrimary,
		},
		temperatureMax: {
			color: EPalette.WarmRed,
			fontSize: 20,
		},
		temperatureMin: {
			color: EPalette.ColdBlue,
			fontSize: 20,
		},
	});
	const iconSize = 48;
	const iconColor = EPalette.Secondary;
	return { styles, iconColor, iconSize };
}
