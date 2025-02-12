import useAuth from "@/hooks/useAuth.hook";
import { IAuthContext } from "@/types/Auth.types";
import React, { createContext, useContext, useMemo } from "react";

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const auth = useAuth();

	const memoizedValue = useMemo(() => auth, [auth.user, auth.loading]);

	return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): IAuthContext => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuthContext must be used within an AuthProvider");
	}
	return context;
};
