import { StyleSheet } from "react-native";
import React from "react";
import { ThemedTouchableOpacity } from "../themed/ThemedTouchableOpacity.component";
import { ThemedText } from "../themed/ThemedText.component";
import { EPalette } from "@/constants/Colors.constants";

interface SystemButtonProps {
	onPress: () => void;
	title: string;
}
export default function SystemButton({ onPress, title }: SystemButtonProps) {
	const { styles } = getSystemButtonStyles();
	return (
		<ThemedTouchableOpacity onPress={onPress} style={styles.container}>
			<ThemedText style={styles.text}>{title}</ThemedText>
		</ThemedTouchableOpacity>
	);
}

function getSystemButtonStyles() {
	const styles = StyleSheet.create({
		container: {
			backgroundColor: EPalette.Secondary,
			paddingVertical: 8,
			paddingHorizontal: 16,
			borderRadius: 4,
		},
		text: {},
	});
	return { styles };
}
