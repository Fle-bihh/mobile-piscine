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
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	function setCustomPosition(suggestion: CitySuggestion) {
		setCurrentPosition([
			suggestion.latitude,
			suggestion.longitude,
			`${suggestion.name}, ${suggestion.country}, ${suggestion.region}`,
			EPositionType.Custom,
		]);
		setError(null);
	}

	const setGeolocation = useCallback(
		async (expoLocation: Location.LocationObject) => {
			setLoading(true);
			try {
				const city = await weatherService.getCityFromCoordinates(
					expoLocation.coords.latitude,
					expoLocation.coords.longitude
				);
				if (!city) {
					setError(
						"The geolocation service connection is lost, please check your internet connection or try again later."
					);
					return false;
				}
				setCurrentPosition([
					expoLocation.coords.latitude,
					expoLocation.coords.longitude,
					getLocationString(city),
					EPositionType.Geolocation,
				]);
				setError(null);
				return true;
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
		setError(null);
		try {
			const expoLocation = await expoLocationService.enableLocationAsync();
			const hasLoc = await setGeolocation(expoLocation);
			if (hasLoc) {
				setError(null);
			}
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
