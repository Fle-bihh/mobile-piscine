import { EPalette } from "@/constants/colors.constants";
import { StyleSheet } from "react-native";

export default function getLocationDisplayStyles() {
	const styles = StyleSheet.create({
		container: {
			alignItems: "center",
		},
		title: {
			fontSize: 20,
			color: EPalette.Secondary,
			fontWeight: "600",
		},
		subtitle: {
			fontSize: 14,
			color: EPalette.TextPrimary,
		},
	});

	return { styles };
}
