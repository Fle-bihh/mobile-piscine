import React, { createContext, useContext } from "react";
import { WeatherService } from "@/services/weather.service";
import { AppServices } from "@/types/app.types";
import { ExpoLocationService } from "@/services/expo-location.service";

const ServicesContext = createContext<AppServices>(null);

export const ServicesProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const weatherService = new WeatherService();
	const expoLocationService = new ExpoLocationService();

	const appServices = {
		weatherService,
		expoLocationService,
	};
	return (
		<ServicesContext.Provider value={appServices}>
			{children}
		</ServicesContext.Provider>
	);
};

export const useWeatherService = (): WeatherService => {
	const context = useContext(ServicesContext);
	if (!context) {
		throw new Error(
			"useWeatherService must be used within a WeatherServiceProvider"
		);
	}
	return context.weatherService;
};

export const useExpoLocationService =
	(): ExpoLocationService => {
		const context = useContext(ServicesContext);
		if (!context) {
			throw new Error(
				"useExpoLocationService must be used within a ExpoLocationServiceProvider"
			);
		}
		return context.expoLocationService;
	};
