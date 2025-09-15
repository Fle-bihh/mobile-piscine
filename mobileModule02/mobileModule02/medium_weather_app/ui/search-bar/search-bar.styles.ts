import { StyleSheet } from "react-native";

export default function getSearchBarStyles() {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			position: "relative",
		},
	});
	return { styles };
}
