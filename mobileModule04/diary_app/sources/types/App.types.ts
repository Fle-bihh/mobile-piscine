import FirebaseService from "@/services/firebase.service";
import FirestoreService from "@/services/firestore.service";
import NotesService from "@/services/notes.service";

export interface IAppServices {
	firebaseService: FirebaseService;
	notesService: NotesService;
}
