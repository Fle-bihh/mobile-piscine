import { ThemedText } from "@/components/themed/ThemedText.component";
import { ThemedView } from "@/components/themed/ThemedView.component";
import { Ionicons } from "@expo/vector-icons";

export function OfflineScreen() {
	return (
		<ThemedView
			style={{
				justifyContent: "center",
				alignItems: "center",
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				zIndex: 1,
				padding: 20,
				gap: 20,
			}}
		>
			<Ionicons name="cloud-offline-outline" size={100} color="white" />
			<ThemedText style={{ fontSize: 20, fontWeight: "bold" }}>
				You are currently offline. Please check your internet connection.
			</ThemedText>
		</ThemedView>
	);
}
