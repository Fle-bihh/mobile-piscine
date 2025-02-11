import { User as FirebaseUser } from "firebase/auth";

export interface IUser extends FirebaseUser {}

export interface IAuthContext {
	user: IUser | undefined;
	signInWithGoogle: () => void;
	signInWithGithub: () => void;
	logout: () => void;
	loading: boolean;
	error: string;
}
