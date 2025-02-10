import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed/ThemedText.component";
import { ThemedView } from "@/components/themed/ThemedView.component";
import { EPalette } from "@/constants/Colors.constants";
import SystemButton from "@/components/buttons/SystemButton.component";
import routing from "@/functions/Routing.functions";
import { ERoutes } from "@/constants/Routes.constants";

export default function NotFoundScreen() {
	const title = "This screen doesn't exist.";
	const buttonTitle = "Go home";
	function onPress() {
		routing.replace(ERoutes.Entry);
	}
	return (
		<>
			<Stack.Screen options={{ title: "Oops!" }} />
			<ThemedView style={styles.container}>
				<ThemedText>{title}</ThemedText>
				<SystemButton onPress={onPress} title={buttonTitle} />
			</ThemedView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 16,
	},
});
