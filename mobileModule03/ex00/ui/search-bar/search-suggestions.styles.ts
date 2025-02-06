import { EPalette } from "@/constants/colors.constants";
import { StyleSheet, useWindowDimensions } from "react-native";

export default function useSearchSuggestionsStyles() {
	const { width } = useWindowDimensions();
	const styles = StyleSheet.create({
		container: {
			position: "absolute",
			backgroundColor: "white",
			width: width - 16,
			top: 48,
			left: -8,
			borderRadius: 8,
			shadowColor: "black",
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
		itemLast: {
			borderBottomWidth: 0,
		},
		text: {
			fontSize: 14,
			color: "black",
		},
		mainText: {
			fontWeight: "600",
		},
	});

	return { styles };
}
