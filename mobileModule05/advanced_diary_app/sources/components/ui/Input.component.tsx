import { StyleSheet, Text, View, ViewProps } from "react-native";
import React, { PropsWithChildren } from "react";
import { ThemedView } from "../themed/ThemedView.component";
import { ThemedText } from "../themed/ThemedText.component";

interface InputProps extends ViewProps, PropsWithChildren {
	title: string;
}
export default function Input({ children, title }: InputProps) {
	return (
		<ThemedView style={styles.inputContainer}>
			<ThemedText style={styles.label}>{title}</ThemedText>
			{children}
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	inputContainer: { gap: 5 },
	label: { fontSize: 16, fontWeight: "500" },
});
