import { ScrollView, type ScrollViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor.hook";

export type ThemedScrollViewProps = ScrollViewProps & {};

export function ThemedScrollView({ style, ...otherProps }: ThemedScrollViewProps) {
	const backgroundColor = useThemeColor("background");

	return <ScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
}
