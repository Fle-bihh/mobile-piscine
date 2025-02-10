import { StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/themed/ThemedView.component";
import SystemButton from "@/components/buttons/SystemButton.component";
import routing from "@/functions/Routing.functions";
import { ERoutes } from "@/constants/Routes.constants";

export default function IndexView() {
	const title = "Login";
	const authentified = false;
	function onPress() {
		if (authentified) {
			routing.push(ERoutes.Home);
		} else {
			routing.push(ERoutes.Login);
		}
	}
	return (
		<ThemedView style={styles.container}>
			<SystemButton onPress={onPress} title={title} />
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
