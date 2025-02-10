import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from "@/components/themed/ThemedView.component";
import { ThemedText } from "@/components/themed/ThemedText.component";
import * as Google from "expo-auth-session/providers/google";

import LoginButton from "@/components/buttons/LoginButton.component";

import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginView() {
	const title = "Login with one of the providers";
	const onPressGoogle = () => {
		promptAsync();
	};

	const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
		iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
		webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
		scopes: ["profile", "email"],
		selectAccount: true,
	});

	return (
		<ThemedView style={styles.container}>
			<ThemedText style={styles.title}>{title}</ThemedText>
			<LoginButton type="github" onPress={() => {}} />
			<LoginButton type="google" onPress={onPressGoogle} />
		</ThemedView>
	);
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
});
