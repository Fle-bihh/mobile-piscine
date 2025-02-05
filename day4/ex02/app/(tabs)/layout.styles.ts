import { Platform, StyleSheet, useWindowDimensions } from "react-native";

export default function useTabsLayoutStyles() {
	const { width, height } = useWindowDimensions();
	const styles = StyleSheet.create({
		container: {},
		backgroud: {
			...Platform.select({
				web: { width, height },
				ios: { flex: 1 },
				android: { flex: 1 },
			}),
		},
	});
	const initialLayout = { width };
	return { styles, initialLayout };
}
