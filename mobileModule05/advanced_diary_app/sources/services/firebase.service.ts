import { Env } from "@/constants/Env.constants";
import { IUser } from "@/types/Auth.types";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import {
	Auth as FirebaseAuth,
	signOut as firebaseSignOut,
	getAuth,
	// getReactNativePersistence,
	GithubAuthProvider,
	GoogleAuthProvider,
	initializeAuth,
	signInWithCredential,
} from "firebase/auth";
import { Platform } from "react-native";

export default class FirebaseService {
	private m_app: FirebaseApp;
	private m_auth: FirebaseAuth;

	private readonly githubTokenEndpoint = "https://github.com/login/oauth/access_token";

	constructor() {
		const config: FirebaseOptions = {
			apiKey: Env.FIREBASE_API_KEY,
			authDomain: Env.FIREBASE_AUTH_DOMAIN,
			projectId: Env.FIREBASE_PROJECT_ID,
			storageBucket: Env.FIREBASE_STORAGE_BUCKET,
			messagingSenderId: Env.FIREBASE_MESSAGING_SENDER_ID,
			appId: Env.FIREBASE_APP_ID,
		};
		this.m_app = initializeApp(config);
		if (Platform.OS === "web") {
			this.m_auth = getAuth(this.m_app);
		} else {
			const getReactNativePersistence = (firebaseAuth as any).getReactNativePersistence; // Workaround for missing type definition
			this.m_auth = initializeAuth(this.m_app, {
				persistence: getReactNativePersistence(ReactNativeAsyncStorage),
			});
		}
	}

	getAuth(): FirebaseAuth {
		return this.m_auth;
	}

	private async getGithubToken(code: string, codeVerifier?: string) {
		const isWeb = Platform.OS === "web";
		const clientId = isWeb ? Env.GITHUB_WEB_CLIENT_ID : Env.GITHUB_MOBILE_CLIENT_ID;
		const clientSecret = isWeb ? Env.GITHUB_WEB_CLIENT_SECRET : Env.GITHUB_MOBILE_CLIENT_SECRET;

		const response = await fetch(this.githubTokenEndpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				client_id: clientId,
				client_secret: clientSecret,
				code: code,
				code_verifier: codeVerifier,
			}),
		});

		const data = await response.json();

		if (!data.access_token) {
			throw new Error(`GitHub token retrieval failed: ${JSON.stringify(data)}`);
		}

		return data.access_token;
	}

	async signInWithGoogle(idToken: string): Promise<IUser> {
		const credential = GoogleAuthProvider.credential(idToken);
		const userCredential = await signInWithCredential(this.m_auth, credential);

		return userCredential.user;
	}

	async signInWithGithub(code: string, codeVerifier?: string): Promise<IUser> {
		const accessToken = await this.getGithubToken(code, codeVerifier);

		if (!accessToken) {
			throw new Error("GitHub access token is undefined or empty.");
		}

		const credential = GithubAuthProvider.credential(accessToken);
		const userCredential = await signInWithCredential(this.m_auth, credential);

		return userCredential.user;
	}

	async signOut() {
		await firebaseSignOut(this.m_auth);
	}
}
