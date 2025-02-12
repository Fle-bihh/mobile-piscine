import { StyleSheet, ViewStyle } from "react-native";
import React from "react";
import { ThemedTouchableOpacity } from "../themed/ThemedTouchableOpacity.component";
import { ThemedText } from "../themed/ThemedText.component";
import { EPalette } from "@/constants/Colors.constants";

interface SystemButtonProps {
	onPress: () => void;
	title: string;
	color?: string;
	textColor?: string;
	disabled?: boolean;
	style?: ViewStyle;
}
export default function SystemButton({
	onPress,
	title,
	color,
	disabled,
	textColor,
	style,
}: SystemButtonProps) {
	const { styles } = getSystemButtonStyles(color, textColor);
	return (
		<ThemedTouchableOpacity
			disabled={disabled}
			onPress={onPress}
			style={[styles.container, style]}
		>
			<ThemedText style={styles.text}>{title}</ThemedText>
		</ThemedTouchableOpacity>
	);
}

function getSystemButtonStyles(
	color: string = EPalette.Secondary,
	textColor: string = EPalette.White
) {
	const styles = StyleSheet.create({
		container: {
			backgroundColor: color,
			paddingVertical: 12,
			paddingHorizontal: 24,
			borderRadius: 8,
			alignItems: "center",
		},
		text: {
			color: textColor,
		},
	});
	return { styles };
}
