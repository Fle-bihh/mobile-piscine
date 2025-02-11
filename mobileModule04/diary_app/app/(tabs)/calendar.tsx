import { StyleSheet } from "react-native";
const TITLE = "Logout";

import { ThemedText } from "@/components/themed/ThemedText.component";
import { ThemedView } from "@/components/themed/ThemedView.component";
import { useAuthContext } from "@/contexts/auth.context";
import SystemButton from "@/components/buttons/SystemButton.component";

export default function CalendarView() {
	const { logout } = useAuthContext();
	return (
		<ThemedView style={styles.container}>
			<ThemedText style={styles.title}>Calendar</ThemedText>
			<SystemButton onPress={logout} title={TITLE} />
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 20, gap: 20 },
	title: { fontSize: 20, fontWeight: "bold" },
});
