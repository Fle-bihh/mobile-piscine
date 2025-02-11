export enum EFeeling {
	Satisfied = "satisfied",
	Happy = "happy",
	Neutral = "neutral",
	Frustrated = "frustrated",
	Stressed = "stressed",
	Excited = "excited",
}

export interface INoteBase {
	userId: string;
	date: number;
	title: string;
	feeling: EFeeling;
	content: string;
}

export interface INote extends INoteBase {
	id: string;
}

export interface INotesContext {
	notes: INote[];
	loading: boolean;
	error: string | null;
	fetchNotes: (userId: string) => Promise<void>;
	createNote: (note: INoteBase) => Promise<void>;
	updateNote: (noteId: string, updatedData: Partial<INote>) => Promise<void>;
	deleteNote: (noteId: string) => Promise<void>;
}
