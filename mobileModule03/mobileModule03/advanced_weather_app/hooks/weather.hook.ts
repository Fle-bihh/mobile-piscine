import { useState, useCallback } from "react";
import { useWeatherService } from "@/contexts/services.context";
import { CitySuggestion, WeatherData } from "@/types/weather.types";
import { useErrorContext } from "@/contexts/error.context";
import { NETWORK_ERROR } from "@/constants/error.constants";

const useWeather = () => {
	const weatherService = useWeatherService();
	const { addError, clearError } = useErrorContext();

	const [citySuggestions, setCitySuggestions] = useState<CitySuggestion[]>([]);
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState(false);

	const searchCities = useCallback(
		async (query: string) => {
			setLoading(true);
			try {
				const suggestions = await weatherService.searchCity(query);
				setCitySuggestions(suggestions);
			} catch (err: unknown) {
				const errMessage = err instanceof Error ? err.message : String(err);
				console.error(errMessage);
				addError("Error while searching for city suggestions." + NETWORK_ERROR);
			} finally {
				setLoading(false);
			}
		},
		[weatherService]
	);

	const fetchWeather = useCallback(
		async (latitude: number, longitude: number) => {
			setLoading(true);
			try {
				const data = await weatherService.getWeatherByCoordinates(latitude, longitude);
				setWeather(data);
				clearError();
			} catch (err: unknown) {
				const errMessage = err instanceof Error ? err.message : String(err);
				console.error(errMessage);
				addError("Error while fetching the weather for this location." + NETWORK_ERROR);
			} finally {
				setLoading(false);
			}
		},
		[weatherService]
	);

	const clearWeather = () => {
		setWeather(null);
	};

	const clearSuggestions = useCallback(() => {
		setCitySuggestions([]);
	}, [setCitySuggestions]);

	return {
		citySuggestions,
		weather,
		loading,
		searchCities,
		fetchWeather,
		clearSuggestions,
		clearWeather,
	};
};

export default useWeather;
