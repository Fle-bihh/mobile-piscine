import { EPalette } from "@/constants/colors.constants";
import { StyleSheet } from "react-native";

export default function useCurrentWeatherStyles() {
	const styles = StyleSheet.create({
		container: {
			alignItems: "center",
			paddingTop: 64,
			gap: 24,
		},
		descriptionContainer: {
			alignItems: "center",
		},
		temperature: {
			color: EPalette.Primary,
			fontSize: 48,
		},
		info: {
			color: EPalette.TextPrimary,
			fontSize: 14,
		},
		wind: {
			color: EPalette.TextPrimary,
			fontSize: 14,
		},
	});

	const weatherIconSize = 64;

	return { styles, weatherIconSize };
}
