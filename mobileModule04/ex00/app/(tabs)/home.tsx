import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed/ThemedText.component";
import { ThemedView } from "@/components/themed/ThemedView.component";

export default function HomeView() {
	return (
		<ThemedView style={styles.container}>
			<ThemedText style={styles.title}>Tab One</ThemedText>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
	},
});
