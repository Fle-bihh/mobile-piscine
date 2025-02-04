import { useCallback, useEffect, useState } from "react";
import useExpoLocation from "./expo-location.hook";
import { getLocationString } from "@/functions/position.functions";
import {
	EPositionType,
	IPositionContext,
} from "@/types/position.types";

export const usePosition = (): IPositionContext => {
	const { location, enableLocationAsync } =
		useExpoLocation();
	const [positionType, setPositionType] =
		useState<EPositionType>(EPositionType.None);
	const [positionString, setPositionString] =
		useState("");

	function setCustomPosition(pos: string) {
		if (positionType !== EPositionType.Custom) {
			setPositionType(EPositionType.Custom);
		}
		setPositionString(pos);
	}

	const setGeolocation = useCallback(() => {
		if (!location) return;
		setPositionString(getLocationString(location));
		setPositionType(EPositionType.Geolocation);
	}, [location]);

	const enableGeolocation = useCallback(async () => {
		try {
			await enableLocationAsync();
			setGeolocation();
		} catch (err: unknown) {
			const errorMessage =
				err instanceof Error
					? err.message
					: String(err);
			setPositionString(errorMessage);
		}
	}, [enableLocationAsync, setGeolocation]);

	useEffect(() => {
		if (
			positionType !== EPositionType.Custom &&
			location
		) {
			setGeolocation();
		}
	}, [location, positionType, setGeolocation]);

	useEffect(() => {
		enableGeolocation();
	}, [enableGeolocation]);

	return {
		setCustomPosition,
		positionString,
		enableGeolocation,
	};
};
