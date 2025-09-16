import FirebaseService from "@/services/firebase.service";
import { NetworkService } from "@/services/network.service";
import NotesService from "@/services/notes.service";

export interface IAppServices {
	firebaseService: FirebaseService;
	notesService: NotesService;
	networkService: NetworkService;
}
