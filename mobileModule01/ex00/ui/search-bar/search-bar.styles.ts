import { StyleSheet } from "react-native";

export function getSearchBarStyles() {
	const styles = StyleSheet.create({
		container: {
			backgroundColor: "rgba(0,0,0,0.05)",
			paddingVertical: 4,
			paddingHorizontal: 16,
			borderRadius: 8,
			flex: 1,
		},
		label: {
			color: "black",
		},
	});

	const placeholderTextColor = "rgba(0,0,0,0.5)";

	return { styles, placeholderTextColor };
}
