import { StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/themed/ThemedView.component";
import SystemButton from "@/components/buttons/SystemButton.component";
import routing from "@/functions/Routing.functions";
import { ERoutes } from "@/constants/Routes.constants";
import { ThemedText } from "@/components/themed/ThemedText.component";

const BUTTON_TITLE = "Login";
const TITLE = "Welcome to fle-biha's diary app";

export default function IndexView() {
	function onPress() {
		routing.push(ERoutes.Login);
	}
	return (
		<ThemedView style={styles.container}>
			<ThemedText style={styles.title}>{TITLE}</ThemedText>
			<SystemButton onPress={onPress} title={BUTTON_TITLE} />
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		gap: 32,
		padding: 16,
	},
	title: {
		fontSize: 24,
	},
});
