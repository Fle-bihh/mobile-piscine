import { useState, useCallback } from "react";
import { useWeatherService } from "@/contexts/services.context";
import { CitySuggestion, WeatherData } from "@/types/weather.types";

const useWeather = () => {
	const weatherService = useWeatherService();
	const [citySuggestions, setCitySuggestions] = useState<CitySuggestion[]>(
		[]
	);
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const searchCities = useCallback(
		async (query: string) => {
			setLoading(true);
			try {
				const suggestions = await weatherService.searchCity(query);
				setCitySuggestions(suggestions);
			} catch (err: unknown) {
				setError(err instanceof Error ? err.message : String(err));
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
				const data = await weatherService.getWeatherByCoordinates(
					latitude,
					longitude
				);
				setWeather(data);
			} catch (err: unknown) {
				setError(err instanceof Error ? err.message : String(err));
			} finally {
				setLoading(false);
			}
		},
		[weatherService]
	);

	const clearSuggestions = useCallback(() => {
		setCitySuggestions([]);
	}, [setCitySuggestions]);

	return {
		citySuggestions,
		weather,
		error,
		loading,
		searchCities,
		fetchWeather,
		clearSuggestions,
	};
};

export default useWeather;
