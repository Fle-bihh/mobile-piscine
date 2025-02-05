import useWeather from "@/hooks/weather.hook";
import { IWeatherContext } from "@/types/weather.types";
import { createContext, ReactNode, useContext } from "react";

const WeatherContext = createContext<IWeatherContext | undefined>(undefined);

interface IWeatherProviderProps {
	children: ReactNode;
}

export const WeatherProvider = ({ children }: IWeatherProviderProps) => {
	const weather = useWeather();

	return (
		<WeatherContext.Provider value={weather}>
			{children}
		</WeatherContext.Provider>
	);
};

export const useWeatherContext = (): IWeatherContext => {
	const context = useContext(WeatherContext);
	if (!context) {
		throw new Error(
			"useWeatherContext must be used within a WeatherProvider"
		);
	}
	return context;
};
