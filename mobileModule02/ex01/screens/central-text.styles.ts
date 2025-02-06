import { StyleSheet } from "react-native";

export const getCentralTextScreenStyles = () => {
	return StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			paddingHorizontal: 16,
			gap: 16,
		},
		content: {
			textAlign: "center",
		},
	});
};
