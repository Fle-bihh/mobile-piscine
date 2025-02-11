import { StyleSheet } from "react-native";
import React from "react";
import { ThemedTouchableOpacity } from "../themed/ThemedTouchableOpacity.component";
import { ThemedText } from "../themed/ThemedText.component";
import { EPalette } from "@/constants/Colors.constants";

interface SystemButtonProps {
	onPress: () => void;
	title: string;
	color?: string;
	disabled?: boolean;
}
export default function SystemButton({ onPress, title, color, disabled }: SystemButtonProps) {
	const { styles } = getSystemButtonStyles(color);
	return (
		<ThemedTouchableOpacity disabled={disabled} onPress={onPress} style={styles.container}>
			<ThemedText style={styles.text}>{title}</ThemedText>
		</ThemedTouchableOpacity>
	);
}

function getSystemButtonStyles(color: string = EPalette.Secondary) {
	const styles = StyleSheet.create({
		container: {
			backgroundColor: color,
			paddingVertical: 4,
			paddingHorizontal: 8,
			borderRadius: 8,
			alignItems: "center",
		},
		text: {},
	});
	return { styles };
}
