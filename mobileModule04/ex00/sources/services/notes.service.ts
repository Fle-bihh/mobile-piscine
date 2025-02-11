import { INote, INoteBase } from "@/types/Notes.types";
import FirestoreService from "./firestore.service";

export default class NotesService extends FirestoreService<INote> {
	constructor() {
		super("notes");
	}

	async getUserNotes(userEmail: string): Promise<INote[]> {
		return this.getByField("userEmail", userEmail);
	}

	async getNoteById(noteId: string): Promise<INote | null> {
		return this.getById(noteId);
	}

	async createNote(noteData: INoteBase): Promise<string> {
		return this.create(noteData);
	}

	async updateNote(noteId: string, updatedData: Partial<INote>): Promise<void> {
		await this.update(noteId, updatedData);
	}

	async deleteNote(noteId: string): Promise<void> {
		await this.delete(noteId);
	}
}
