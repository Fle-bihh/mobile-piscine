import { StyleSheet, useWindowDimensions } from "react-native";

export default function useCardSliderStyles() {
	const { width } = useWindowDimensions();
	const styles = StyleSheet.create({
		container: {
			width: width,
			paddingHorizontal: 16,
		},
		contentContainer: {
			alignItems: "flex-start",
			gap: 12,
		},
	});
	return { styles };
}
