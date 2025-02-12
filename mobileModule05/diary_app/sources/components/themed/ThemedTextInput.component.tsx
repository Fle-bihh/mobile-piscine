import { TextInput, type TextInputProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor.hook";
import { EFonts } from "@/constants/Fonts.constants";

export type ThemedTextInputProps = TextInputProps & {};

export function ThemedTextInput({ style, ...rest }: ThemedTextInputProps) {
	const color = useThemeColor("text");
	const backgroundColor = useThemeColor("backgroundSecondary");

	return <TextInput style={[{ color, backgroundColor }, styles.default, style]} {...rest} />;
}

const styles = StyleSheet.create({
	default: {
		fontFamily: EFonts.Primary,
	},
});
