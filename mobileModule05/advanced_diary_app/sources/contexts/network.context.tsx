import { OfflineScreen } from "@/screens/Offline.screen";
import * as Network from "expo-network";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNetworkService } from "./services.context";

interface NetworkContextType {
	isConnected: boolean;
}

const NetworkContext = createContext<NetworkContextType>({
	isConnected: true,
});

export const useNetwork = () => {
	const contextValue = useContext(NetworkContext);
	if (!contextValue) {
		throw new Error("useNetwork must be used within a NetworkProvider");
	}
	return contextValue;
};

export const NetworkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const networkService = useNetworkService();
	const [isConnected, setIsConnected] = useState(true);
	const state = Network.useNetworkState();

	useEffect(() => {
		const currentIsConnected = networkService.isConnected(state);
		setIsConnected(currentIsConnected);
		networkService.setIsOnline(currentIsConnected);
	}, [state, networkService]);

	return (
		<NetworkContext.Provider value={{ isConnected }}>
			{!isConnected && <OfflineScreen />}
			{children}
		</NetworkContext.Provider>
	);
};
