import { StyleSheet } from "react-native";

export function getAppBarStyles() {
	return StyleSheet.create({
		container: {
			paddingHorizontal: 16,
			paddingVertical: 8,
			borderBottomColor: "rgba(0,0,0,0.2)",
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
