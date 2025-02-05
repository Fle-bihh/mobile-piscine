import { EPalette } from "@/constants/colors.constants";
import { StyleSheet, useWindowDimensions } from "react-native";

export default function useSearchSuggestionsStyles() {
	const { width } = useWindowDimensions();
	const styles = StyleSheet.create({
		container: {
			position: "absolute",
			backgroundColor: EPalette.BackgroundPrimary,
			width: width - 32,
			top: 48,
			borderRadius: 8,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.2,
			shadowRadius: 4,
			elevation: 3,
		},
		item: {
			padding: 12,
			borderBottomWidth: 1,
			borderBottomColor: "#ddd",
		},
		text: {
			fontSize: 14,
			color: EPalette.TextPrimary,
		},
		mainText: {
			fontWeight: "600",
		},
	});

	return { styles };
}
