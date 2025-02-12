import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor.hook";
import { EFonts } from "@/constants/Fonts.constants";

export type ThemedTextProps = TextProps & {};

export function ThemedText({ style, ...rest }: ThemedTextProps) {
	const color = useThemeColor("text");

	return <Text style={[{ color }, styles.default, style]} {...rest} />;
}

const styles = StyleSheet.create({
	default: {
		fontFamily: EFonts.Primary,
	},
});
