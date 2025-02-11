import { StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/themed/ThemedView.component";
import { ThemedText } from "@/components/themed/ThemedText.component";
import LoginButton from "@/components/buttons/LoginButton.component";
import { useAuthContext } from "@/contexts/auth.context";
import Loader from "@/components/ui/Loader.component";
import { EPalette } from "@/constants/Colors.constants";

const TITLE = "Login with one of the providers";

export default function LoginView() {
	const { signInWithGoogle, signInWithGithub, loading, error } = useAuthContext();

	const AuthContent = (
		<>
			{error && <ThemedText style={styles.error}>{error}</ThemedText>}
			<ThemedText style={styles.title}>{TITLE}</ThemedText>
			<LoginButton type="github" onPress={signInWithGithub} />
			<LoginButton type="google" onPress={signInWithGoogle} />
		</>
	);

	return <ThemedView style={styles.container}>{loading ? <Loader /> : AuthContent}</ThemedView>;
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		gap: 16,
		padding: 16,
	},
	title: {
		fontSize: 24,
	},
	error: {
		color: EPalette.Error,
		textAlign: "center",
	},
});
