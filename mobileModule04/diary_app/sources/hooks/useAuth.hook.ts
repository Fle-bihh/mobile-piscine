import { useFirebaseService } from "@/contexts/services.context";
import { useFirebaseAuthState } from "@/hooks/useFirebaseAuthState.hook";
import { useGithubAuth, useGoogleAuth } from "@/hooks/useOAuth.hook";
import { IAuthContext, IUser } from "@/types/Auth.types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";
import { useCallback, useEffect, useState } from "react";

WebBrowser.maybeCompleteAuthSession();

export default function useAuth(): IAuthContext {
	const firebaseService = useFirebaseService();
	const [user, setUser] = useState<IUser | undefined>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const { googleResponse, promptGoogleSignIn } = useGoogleAuth();
	const { githubResponse, promptGithubSignIn, githubConfig } = useGithubAuth();

	const setUserState = useCallback(async (newUser: IUser | undefined) => {
		setUser(newUser);
		if (newUser) {
			await AsyncStorage.setItem("user", JSON.stringify(newUser));
		} else {
			await AsyncStorage.removeItem("user");
		}
	}, []);

	useFirebaseAuthState(firebaseService.getAuth(), setUserState, setLoading);

	useEffect(() => {
		const authenticateWithGoogle = async () => {
			try {
				if (googleResponse?.type === "success") {
					const firebaseUser = await firebaseService.signInWithGoogle(
						googleResponse.params.id_token
					);
					setUserState(firebaseUser);
				}
			} catch (err) {
				setError(String(err));
				console.error(err);
			} finally {
				setLoading(false);
			}
		};
		if (googleResponse) authenticateWithGoogle();
	}, [googleResponse]);

	useEffect(() => {
		const authenticateWithGithub = async () => {
			try {
				if (githubResponse?.type === "success") {
					console.log("Firebase Github signin", githubResponse);
					const firebaseUser = await firebaseService.signInWithGithub(
						githubResponse.params.code,
						githubConfig?.codeVerifier
					);
					setUserState(firebaseUser);
				}
			} catch (err) {
				setError(String(err));
				console.error(err);
			} finally {
				setLoading(false);
			}
		};
		if (githubResponse) authenticateWithGithub();
	}, [githubResponse, githubConfig]);

	const signInWithGoogle = useCallback(() => {
		setLoading(true);
		promptGoogleSignIn();
	}, [promptGoogleSignIn]);

	const signInWithGithub = useCallback(() => {
		setLoading(true);
		promptGithubSignIn();
	}, [promptGithubSignIn]);

	const logout = useCallback(async () => {
		await firebaseService.signOut();
		setUserState(undefined);
	}, [firebaseService]);

	return {
		user,
		signInWithGithub,
		signInWithGoogle,
		logout,
		loading,
		error,
	};
}
