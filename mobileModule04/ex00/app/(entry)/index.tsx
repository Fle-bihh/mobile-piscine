import { StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/themed/ThemedView.component";
import SystemButton from "@/components/buttons/SystemButton.component";
import routing from "@/functions/Routing.functions";
import { ERoutes } from "@/constants/Routes.constants";

const TITLE = "Login";

export default function IndexView() {
	function onPress() {
		routing.push(ERoutes.Login);
	}
	return (
		<ThemedView style={styles.container}>
			<SystemButton onPress={onPress} title={TITLE} />
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
