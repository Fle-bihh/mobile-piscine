import { StyleSheet } from "react-native";
import React from "react";
import { useAuthContext } from "@/contexts/auth.context";
import { ThemedView } from "../themed/ThemedView.component";
import { ThemedText } from "../themed/ThemedText.component";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor.hook";
import { ThemedTouchableOpacity } from "../themed/ThemedTouchableOpacity.component";
import { EPalette } from "@/constants/Colors.constants";

export default function ProfileHeader() {
	const { user, logout, loading } = useAuthContext();
	const iconColor = useThemeColor("text");

	if (!user) return null;
	return (
		<ThemedView style={styles.container}>
			<ThemedText style={styles.title}>{user.displayName}</ThemedText>
			<ThemedTouchableOpacity style={styles.button} onPress={logout} disabled={loading}>
				<Ionicons name="log-out-outline" color={iconColor} size={20} />
			</ThemedTouchableOpacity>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 16,
	},
	title: {
		fontSize: 20,
	},
	button: {
		backgroundColor: EPalette.Grey,
		width: 32,
		height: 32,
		borderRadius: 999,
		justifyContent: "center",
		alignItems: "center",
	},
});
