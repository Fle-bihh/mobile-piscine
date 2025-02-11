import { SafeAreaView, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor.hook";

export type ThemedSafeAreaViewProps = ViewProps & {};

export function ThemedSafeAreaView({ style, ...otherProps }: ThemedSafeAreaViewProps) {
	const backgroundColor = useThemeColor("background");

	return <SafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}
