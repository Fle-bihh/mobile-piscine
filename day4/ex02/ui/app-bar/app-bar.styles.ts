import { EPalette } from "@/constants/colors.constants";
import { StyleSheet } from "react-native";

export function getAppBarStyles() {
	return StyleSheet.create({
		container: {
			paddingHorizontal: 16,
			paddingVertical: 8,
			borderBottomColor: EPalette.GreyOpacity,
			borderBottomWidth: 0.5,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			gap: 16,
			zIndex: 10,
		},
	});
}
