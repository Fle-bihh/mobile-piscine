import { IErrorContext } from "@/types/error.types";
import { useCallback, useState } from "react";

export default function useError(): IErrorContext {
	const [error, setError] = useState<string | null>(null);

	const clearError = useCallback(() => {
		setError(null);
	}, []);

	const addError = useCallback((err: string) => {
		setError(err);
	}, []);

	return {
		error,
		addError,
		clearError,
	};
}
