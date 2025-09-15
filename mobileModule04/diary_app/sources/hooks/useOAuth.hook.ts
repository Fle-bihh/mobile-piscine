import { Env } from "@/constants/Env.constants";
import * as Google from "expo-auth-session/providers/google";
import { useMemo } from "react";

import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { Platform } from "react-native";

export function useGoogleAuth() {
	const googleConfig = useMemo(
		() => ({
			clientId: Env.GOOGLE_WEB_CLIENT_ID,
			iosClientId: Env.GOOGLE_IOS_CLIENT_ID,
			webClientId: Env.GOOGLE_WEB_CLIENT_ID,
			androidClientId: Env.GOOGLE_ANDROID_CLIENT_ID,
			scopes: ["profile", "email"],
			selectAccount: true,
		}),
		[]
	);

	const [_, googleResponse, promptGoogleSignIn] = Google.useIdTokenAuthRequest(googleConfig);

	return { googleResponse, promptGoogleSignIn };
}

export function useGithubAuth() {
	const githubClientId =
		Platform.OS === "web" ? Env.GITHUB_WEB_CLIENT_ID : Env.GITHUB_MOBILE_CLIENT_ID;
	const redirectUri = makeRedirectUri();
	const githubRequest = useMemo(
		() => ({
			config: {
				clientId: githubClientId,
				scopes: ["discovery", "user:email"],
				redirectUri,
			},
			discovery: {
				authorizationEndpoint: "https://github.com/login/oauth/authorize",
				tokenEndpoint: "https://github.com/login/oauth/access_token",
				revocationEndpoint: `https://github.com/settings/connections/applications/${githubClientId}`,
			},
		}),
		[githubClientId]
	);

	const [githubConfig, githubResponse, promptGithubSignIn] = useAuthRequest(
		githubRequest.config,
		githubRequest.discovery
	);

	return { githubResponse, promptGithubSignIn, githubConfig };
}
