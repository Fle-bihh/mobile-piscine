import { useCallback, useEffect, useState } from "react";
import { getLocationString } from "@/functions/position.functions";
import { EPositionType, IPositionContext, TPosition } from "@/types/position.types";
import { useExpoLocationService, useWeatherService } from "@/contexts/services.context";
import { CitySuggestion } from "@/types/weather.types";
import * as Location from "expo-location";

export const usePosition = (): IPositionContext => {
	const expoLocationService = useExpoLocationService();
	const weatherService = useWeatherService();

	const [currentPosition, setCurrentPosition] = useState<TPosition | undefined>();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	function setCustomPosition(suggestion: CitySuggestion) {
		setCurrentPosition([
			suggestion.latitude,
			suggestion.longitude,
			`${suggestion.name}, ${suggestion.country}, ${suggestion.region}`,
			EPositionType.Custom,
		]);
		setError("");
	}

	const setGeolocation = useCallback(
		async (expoLocation: Location.LocationObject) => {
			setLoading(true);
			try {
				const city = await weatherService.getCityFromCoordinates(
					expoLocation.coords.latitude,
					expoLocation.coords.longitude
				);
				const locString = city
					? getLocationString(city)
					: `${expoLocation.coords.latitude} : ${expoLocation.coords.longitude}`;
				setCurrentPosition([
					expoLocation.coords.latitude,
					expoLocation.coords.longitude,
					locString,
					EPositionType.Geolocation,
				]);
				setError("");
			} catch (err: unknown) {
				const errorMessage = err instanceof Error ? err.message : String(err);
				setError(errorMessage);
			} finally {
				setLoading(false);
			}
		},
		[weatherService]
	);

	const enableGeolocation = useCallback(async () => {
		if (currentPosition && currentPosition[3] === EPositionType.Geolocation) return;
		setCurrentPosition(undefined);
		setLoading(true);
		try {
			const expoLocation = await expoLocationService.enableLocationAsync();
			await setGeolocation(expoLocation);
			setError("");
		} catch (err: unknown) {
			const errorMessage = err instanceof Error ? err.message : String(err);
			setError(errorMessage);
		} finally {
			setLoading(false);
		}
	}, [expoLocationService, setGeolocation, currentPosition]);

	useEffect(() => {
		enableGeolocation();
	}, []);

	return {
		setCustomPosition,
		currentPosition,
		enableGeolocation,
		error,
		loading,
	};
};
