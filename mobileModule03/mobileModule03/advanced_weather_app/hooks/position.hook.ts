import { useCallback, useEffect, useState } from "react";
import { EPositionType, IPositionContext, TPosition } from "@/types/position.types";
import { useExpoLocationService, useWeatherService } from "@/contexts/services.context";
import { CitySuggestion } from "@/types/weather.types";
import * as Location from "expo-location";
import { useErrorContext } from "@/contexts/error.context";
import { NETWORK_ERROR } from "@/constants/error.constants";

export const usePosition = (): IPositionContext => {
	const expoLocationService = useExpoLocationService();
	const weatherService = useWeatherService();
	const { error, addError, clearError } = useErrorContext();

	const [currentPosition, setCurrentPosition] = useState<TPosition | undefined>();
	const [loading, setLoading] = useState(false);

	function setCustomPosition(suggestion: CitySuggestion) {
		setCurrentPosition([suggestion, EPositionType.Custom]);
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
					addError("Your location does not match a known city.");
				} else {
					setCurrentPosition([city, EPositionType.Geolocation]);
				}
				clearError();
			} catch (err: unknown) {
				throw err;
			} finally {
				setLoading(false);
			}
		},
		[weatherService]
	);

	const enableGeolocation = useCallback(async () => {
		if (currentPosition && currentPosition[1] === EPositionType.Geolocation) {
			if (error) clearError();
			return;
		}
		setCurrentPosition(undefined);
		setLoading(true);
		let expoLocation = null;
		try {
			expoLocation = await expoLocationService.enableLocationAsync();
		} catch (err) {
			const errorMessage = err instanceof Error ? err.message : String(err);
			console.error(errorMessage);
			addError(
				"Error while enabling geolocation. Please check your device settings or try again later."
			);
		}
		try {
			if (!expoLocation) throw new Error("Unknown while enabling Expo Location service.");
			await setGeolocation(expoLocation);
			clearError();
		} catch (err: unknown) {
			const errorMessage = err instanceof Error ? err.message : String(err);
			console.error(errorMessage);
			addError("Error while getting your geolocation." + NETWORK_ERROR);
		} finally {
			setLoading(false);
		}
	}, [expoLocationService, setGeolocation, currentPosition, error]);

	useEffect(() => {
		enableGeolocation();
	}, []);

	return {
		setCustomPosition,
		currentPosition,
		enableGeolocation,
		loading,
	};
};
