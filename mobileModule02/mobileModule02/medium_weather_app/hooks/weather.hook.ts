import { useState, useCallback } from "react";
import { useWeatherService } from "@/contexts/services.context";
import { CitySuggestion, WeatherData } from "@/types/weather.types";

const useWeather = () => {
	const weatherService = useWeatherService();
	const [citySuggestions, setCitySuggestions] = useState<CitySuggestion[]>([]);
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const searchCities = useCallback(
		async (query: string) => {
			setLoading(true);
			try {
				const suggestions = await weatherService.searchCity(query);
				setCitySuggestions(suggestions);
				setError(null);
			} catch (err: unknown) {
				const errMessage =
					"The geolocation service connection is lost, please check your internet connection or try again later.";
				setError(errMessage);
				clearSuggestions();
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
				setError(null);
			} catch (err: unknown) {
				const errMessage =
					"The weather service connection is lost, please check your internet connection or try again later.";
				setError(errMessage);
				clearSuggestions();
			} finally {
				setLoading(false);
			}
		},
		[weatherService]
	);

	const clearWeather = useCallback(() => {
		setWeather(null);
		setError(null);
	}, []);

	const clearSuggestions = useCallback(() => {
		setCitySuggestions([]);
		setError(null);
	}, [setCitySuggestions]);

	return {
		citySuggestions,
		weather,
		error,
		loading,
		searchCities,
		fetchWeather,
		clearSuggestions,
		clearWeather,
	};
};

export default useWeather;
