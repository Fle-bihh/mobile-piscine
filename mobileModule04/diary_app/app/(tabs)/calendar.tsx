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
			<SystemButton onPress={logout} title={TITLE} />
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignItems: "center" },
	title: { fontSize: 20, fontWeight: "bold" },
});
