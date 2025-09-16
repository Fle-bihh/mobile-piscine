import { useNotesService } from "@/contexts/services.context";
import toaster from "@/functions/Toast.functions";
import { INote, INoteBase, INotesContext } from "@/types/Notes.types";
import { useState, useCallback } from "react";

export default function useNotes(): INotesContext {
	const notesService = useNotesService();

	const [notes, setNotes] = useState<INote[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	function hookError(err: string) {
		toaster.error(err);
	}

	function hookSuccess(msg: string) {
		toaster.success(msg);
	}

	const fetchNotes = useCallback(
		async (userId: string) => {
			setLoading(true);
			try {
				const userNotes = await notesService.getUserNotes(userId);
				setNotes(userNotes);
			} catch (err) {
				hookError("Failed to fetch notes.");
				console.log(err);
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
				hookSuccess("Note created successfully");
			} catch (err) {
				hookError("Failed to create note.");
				console.log(err);
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
				hookSuccess("Note deleted successfully");
			} catch (err) {
				hookError("Failed to delete note.");
				console.log(err);
			} finally {
				setLoading(false);
			}
		},
		[notesService]
	);

	return {
		notes: notes.sort((a, b) => b.date - a.date),
		loading,
		fetchNotes,
		createNote,
		deleteNote,
	};
}
