import { INote, INoteBase } from "@/types/Notes.types";
import FirestoreService from "./firestore.service";

export default class NotesService extends FirestoreService<INote> {
	constructor() {
		super("notes");
	}

	async getUserNotes(userId: string): Promise<INote[]> {
		return this.getByField("userId", userId);
	}

	async getNoteById(noteId: string): Promise<INote | null> {
		return this.getById(noteId);
	}

	async createNote(noteData: INoteBase): Promise<string> {
		return this.create(noteData);
	}

	async deleteNote(noteId: string): Promise<void> {
		await this.delete(noteId);
	}
}
