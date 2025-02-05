import { useCallback, useEffect, useState } from "react";
import { getLocationString } from "@/functions/position.functions";
import {
	EPositionType,
	IPositionContext,
	TPosition,
} from "@/types/position.types";
import {
	useExpoLocationService,
	useWeatherService,
} from "@/contexts/services.context";
import { CitySuggestion } from "@/types/weather.types";
import * as Location from "expo-location";
import { platformIsWeb } from "@/functions/app.functions";

export const usePosition = (): IPositionContext => {
	const expoLocationService = useExpoLocationService();
	const weatherService = useWeatherService();

	const [currentPosition, setCurrentPosition] = useState<
		TPosition | undefined
	>();
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
				const isWeb = platformIsWeb();
				const city = await weatherService.getCityFromCoordinates(
					expoLocation.coords.latitude,
					expoLocation.coords.longitude,
					isWeb
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
			} catch (err: unknown) {
				const errorMessage =
					err instanceof Error ? err.message : String(err);
				setError("[POSITION HOOK] : [setGeolocation]" + errorMessage);
			} finally {
				setLoading(false);
			}
		},
		[weatherService]
	);

	const enableGeolocation = useCallback(async () => {
		setLoading(true);
		try {
			const expoLocation =
				await expoLocationService.enableLocationAsync();
			await setGeolocation(expoLocation);
		} catch (err: unknown) {
			const errorMessage =
				err instanceof Error ? err.message : String(err);
			setError("[POSITION HOOK] : [enableGeolocation]" + errorMessage);
		} finally {
			setLoading(false);
		}
	}, [expoLocationService, setGeolocation]);

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
