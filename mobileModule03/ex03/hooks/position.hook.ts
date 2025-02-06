import { useCallback, useEffect, useState } from "react";
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
		setCurrentPosition([suggestion, EPositionType.Custom]);
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
				if (!city) {
					setError("Your location does not match a known city.");
				} else {
					setCurrentPosition([city, EPositionType.Geolocation]);
					setError("");
				}
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
		if (currentPosition && currentPosition[1] === EPositionType.Geolocation) return;
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
