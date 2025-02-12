import { useCallback, useEffect, useState } from "react";
import { IAuthContext, IUser } from "@/types/Auth.types";
import { useGoogleAuth, useGithubAuth } from "@/hooks/useOAuth.hook";
import { useFirebaseAuthState } from "@/hooks/useFirebaseAuthState.hook";
import { useFirebaseService } from "@/contexts/services.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";
import toaster from "@/functions/Toast.functions";

WebBrowser.maybeCompleteAuthSession();

export default function useAuth(): IAuthContext {
	const firebaseService = useFirebaseService();
	const [user, setUser] = useState<IUser | undefined>();
	const [loading, setLoading] = useState(true);

	const { googleResponse, promptGoogleSignIn } = useGoogleAuth();
	const { githubResponse, promptGithubSignIn } = useGithubAuth();

	function hookError(err: string) {
		toaster.error(err);
	}

	function hookSuccess(msg: string) {
		toaster.success(msg);
	}

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
					hookSuccess("Authentified successfully");
				}
			} catch (err) {
				hookError(String(err));
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
					const firebaseUser = await firebaseService.signInWithGithub(
						githubResponse.params.code
					);
					setUserState(firebaseUser);
					hookSuccess("Authentified successfully");
				}
			} catch (err) {
				hookError(String(err));
				console.error(err);
			} finally {
				setLoading(false);
			}
		};
		if (githubResponse) authenticateWithGithub();
	}, [githubResponse]);

	const signInWithGoogle = useCallback(() => {
		setLoading(true);
		promptGoogleSignIn();
	}, [promptGoogleSignIn]);

	const signInWithGithub = useCallback(() => {
		setLoading(true);
		promptGithubSignIn();
	}, [promptGithubSignIn]);

	const logout = useCallback(async () => {
		setLoading(true);
		await firebaseService.signOut();
		setUserState(undefined);
		setLoading(false);
	}, [firebaseService]);

	return {
		user,
		signInWithGithub,
		signInWithGoogle,
		logout,
		loading,
	};
}
