import FirebaseService from "@/services/firebase.service";
import NotesService from "@/services/notes.service";
import { IAppServices } from "@/types/App.types";
import React, { createContext, useContext, useMemo } from "react";

const ServicesContext = createContext<IAppServices | null>(null);

export const ServicesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const firebaseService = useMemo(() => new FirebaseService(), []);
	const notesService = useMemo(() => new NotesService(), []);

	const appServices = useMemo(
		() => ({
			firebaseService,
			notesService,
		}),
		[firebaseService, notesService]
	);

	return <ServicesContext.Provider value={appServices}>{children}</ServicesContext.Provider>;
};

export const useFirebaseService = (): FirebaseService => {
	const context = useContext(ServicesContext);
	if (!context) {
		throw new Error("useFirebaseService must be used within a FirebaseServiceProvider");
	}
	return context.firebaseService;
};

export const useNotesService = (): NotesService => {
	const context = useContext(ServicesContext);
	if (!context) {
		throw new Error("useNotesService must be used within a NotesServiceProvider");
	}
	return context.notesService;
};
