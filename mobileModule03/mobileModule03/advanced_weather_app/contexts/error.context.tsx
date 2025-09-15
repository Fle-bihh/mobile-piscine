import useError from "@/hooks/error.hook";
import { IErrorContext } from "@/types/error.types";
import { createContext, ReactNode, useContext } from "react";

const ErrorContext = createContext<IErrorContext | undefined>(undefined);

interface IErrorProviderProps {
	children: ReactNode;
}

export const ErrorProvider = ({ children }: IErrorProviderProps) => {
	const Error = useError();

	return <ErrorContext.Provider value={Error}>{children}</ErrorContext.Provider>;
};

export const useErrorContext = (): IErrorContext => {
	const context = useContext(ErrorContext);
	if (!context) {
		throw new Error("useErrorContext must be used within a ErrorProvider");
	}
	return context;
};
