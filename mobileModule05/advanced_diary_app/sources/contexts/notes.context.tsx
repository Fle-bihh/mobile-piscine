import useNotes from "@/hooks/useNotes.hook";
import { INotesContext } from "@/types/Notes.types";
import React, { createContext, useContext, useMemo } from "react";

const NotesContext = createContext<INotesContext | null>(null);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const notes = useNotes();

	const memoizedValue = useMemo(() => notes, [notes.notes, notes.loading]);

	return <NotesContext.Provider value={memoizedValue}>{children}</NotesContext.Provider>;
};

export const useNotesContext = (): INotesContext => {
	const context = useContext(NotesContext);
	if (!context) {
		throw new Error("useNotesContext must be used within a NotesProvider");
	}
	return context;
};
