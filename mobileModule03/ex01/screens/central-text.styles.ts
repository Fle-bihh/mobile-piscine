import { EPalette } from "@/constants/colors.constants";
import { StyleSheet } from "react-native";

export const getCentralTextScreenStyles = () => {
	return StyleSheet.create({
		container: {
			flex: 1,
			alignItems: "center",
			paddingHorizontal: 16,
			paddingTop: 32,
		},
		title: {
			fontSize: 24,
			fontWeight: "700",
		},
		content: {
			textAlign: "center",
			fontWeight: "500",
			fontSize: 20,
			marginTop: 8,
			marginBottom: 32,
		},
	});
};
