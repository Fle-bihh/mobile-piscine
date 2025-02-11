import { Auth as FirebaseAuth, onAuthStateChanged } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export function useFirebaseAuthState(auth: FirebaseAuth, setUser: Function, setLoading: Function) {
	useEffect(() => {
		const loadUser = async () => {
			const storedUser = await AsyncStorage.getItem("user");
			if (storedUser) {
				setUser(JSON.parse(storedUser));
			}
			setLoading(false);
		};

		loadUser();

		const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
			if (currentUser) {
				setUser(currentUser);
			} else {
				setUser(undefined);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, [auth]);
}
