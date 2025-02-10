import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth, Auth as FirebaseAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
	apiKey: "AIzaSyBrD3MQyY0m5j5tt5ihfvZ31CMKHqeAD2A",
	authDomain: "diary-app-ef2dc.firebaseapp.com",
	projectId: "diary-app-ef2dc",
	storageBucket: "diary-app-ef2dc.firebasestorage.app",
	messagingSenderId: "449735941107",
	appId: "1:449735941107:web:de216b97675ed744ed1086",
};

export default class FirebaseService {
	private m_app: FirebaseApp;
	private m_auth: FirebaseAuth;

	private m_googleProvider: GoogleAuthProvider;

	constructor() {
		this.m_app = initializeApp(firebaseConfig);
		this.m_auth = getAuth(this.m_app);
		this.m_googleProvider = new GoogleAuthProvider();
	}

	private log(...data: any[]) {
		console.log("[FirebaseService] - ", data);
	}

	async signInWithGoogle() {
		try {
			this.log("Begin signin");
			const credentialRequest = await signInWithPopup(this.m_auth, this.m_googleProvider);
			this.log("Get credential");
			const credential = GoogleAuthProvider.credentialFromResult(credentialRequest);
			const token = credential?.accessToken;
			const user = credentialRequest.user;

			this.log("[signInWithGoogle] - Success - ", { token, user });
		} catch (error: any) {
			this.log("Got error", error);
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.customData.email;
			const credential = GoogleAuthProvider.credentialFromError(error);

			this.log("[signInWithGoogle] - Error - ", {
				errorCode,
				errorMessage,
				email,
				credential,
			});
		}
	}
}
