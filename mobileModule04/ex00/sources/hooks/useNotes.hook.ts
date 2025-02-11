import { useNotesService } from "@/contexts/services.context";
import { INote, INoteBase } from "@/types/Notes.types";
import { useState, useCallback } from "react";

export default function useNotes() {
	const notesService = useNotesService();

	const [notes, setNotes] = useState<INote[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetchNotes = useCallback(
		async (userEmail: string) => {
			setLoading(true);
			try {
				const userNotes = await notesService.getUserNotes(userEmail);
				setNotes(userNotes);
			} catch (err) {
				setError("Failed to fetch notes.");
				console.error(err);
			} finally {
				setLoading(false);
			}
		},
		[notesService]
	);

	const createNote = useCallback(
		async (note: INoteBase) => {
			setLoading(true);
			try {
				const noteId = await notesService.createNote(note);
				setNotes((prev) => [...prev, { ...note, id: noteId }]);
			} catch (err) {
				setError("Failed to create note.");
				console.error(err);
			} finally {
				setLoading(false);
			}
		},
		[notesService]
	);

	const updateNote = useCallback(
		async (noteId: string, updatedData: Partial<INote>) => {
			setLoading(true);
			try {
				await notesService.updateNote(noteId, updatedData);
				setNotes((prev) =>
					prev.map((note) => (note.id === noteId ? { ...note, ...updatedData } : note))
				);
			} catch (err) {
				setError("Failed to update note.");
				console.error(err);
			} finally {
				setLoading(false);
			}
		},
		[notesService]
	);

	const deleteNote = useCallback(
		async (noteId: string) => {
			setLoading(true);
			try {
				await notesService.deleteNote(noteId);
				setNotes((prev) => prev.filter((note) => note.id !== noteId));
			} catch (err) {
				setError("Failed to delete note.");
				console.error(err);
			} finally {
				setLoading(false);
			}
		},
		[notesService]
	);

	return {
		notes,
		loading,
		error,
		fetchNotes,
		createNote,
		updateNote,
		deleteNote,
	};
}
