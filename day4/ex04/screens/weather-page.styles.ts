import { StyleSheet } from "react-native";

export const getWeatherPageScreenStyles = () => {
	return StyleSheet.create({
		container: {
			flex: 1,
		},
		contentContainer: {
			alignItems: "center",
			padding: 16,
			gap: 16,
		},
	});
};
