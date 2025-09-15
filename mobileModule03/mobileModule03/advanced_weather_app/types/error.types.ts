export interface IErrorContext {
	error: string | null;
	addError: (err: string) => void;
	clearError: () => void;
}
