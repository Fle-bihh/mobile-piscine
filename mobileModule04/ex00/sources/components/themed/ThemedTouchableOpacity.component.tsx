import { TouchableOpacity, type TouchableOpacityProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor.hook";

export type ThemedTouchableOpacityProps = TouchableOpacityProps & {};

export function ThemedTouchableOpacity({ style, ...otherProps }: ThemedTouchableOpacityProps) {
	const backgroundColor = useThemeColor("background");

	return <TouchableOpacity style={[{ backgroundColor }, style]} {...otherProps} />;
}
