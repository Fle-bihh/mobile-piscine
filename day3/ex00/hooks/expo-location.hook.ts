import { useState, useEffect, useCallback } from "react";
import * as Location from "expo-location";
import { log } from "@/functions/log.functions";

type PermissionStatus =
	Location.PermissionResponse["status"];
export type LocationUpdateCallback = (
	location: Location.LocationObject
) => void;

interface UseExpoLocationReturn {
	location: Location.LocationObject | null;
	permissionStatus: PermissionStatus | null;
	error: string | null;
	canAskAgain: boolean;
	askPermission: () => Promise<boolean>;
	fetchLocation: (
		options?: Location.LocationOptions
	) => Promise<Location.LocationObject | null>;
	subscribeToLocationUpdates: (
		callback: LocationUpdateCallback,
		options?: Location.LocationOptions
	) => Promise<Location.LocationSubscription | null>;
	enableLocationAsync: (
		options?: Location.LocationOptions
	) => Promise<Location.LocationObject>;
}

const useExpoLocation = (): UseExpoLocationReturn => {
	const [location, setLocation] =
		useState<Location.LocationObject | null>(null);
	const [permissionStatus, setPermissionStatus] =
		useState<PermissionStatus | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [canAskAgain, setCanAskAgain] =
		useState<boolean>(true);

	const askPermission =
		useCallback(async (): Promise<boolean> => {
			try {
				const {
					status,
					canAskAgain: permissionCanAskAgain,
				} =
					await Location.requestForegroundPermissionsAsync();
				setPermissionStatus(status);
				setCanAskAgain(permissionCanAskAgain);
				if (status !== "granted") {
					setError(
						"Permission to access location was denied"
					);
					return false;
				}
				setError(null);
				return true;
			} catch (err: unknown) {
				const errorMessage =
					err instanceof Error
						? err.message
						: String(err);
				setError(
					errorMessage ||
						"Error requesting location permissions"
				);
				return false;
			}
		}, []);

	const fetchLocation = useCallback(
		async (
			options?: Location.LocationOptions
		): Promise<Location.LocationObject | null> => {
			try {
				// If permission was not already granted, request it.
				if (permissionStatus !== "granted") {
					const hasPermission =
						await askPermission();
					if (!hasPermission) {
						throw new Error(
							"Location permission not granted"
						);
					}
				}
				const currentLocation =
					await Location.getCurrentPositionAsync(
						options ?? {}
					);
				setLocation(currentLocation);
				return currentLocation;
			} catch (err: unknown) {
				const errorMessage =
					err instanceof Error
						? err.message
						: String(err);
				setError(
					errorMessage ||
						"Error fetching location"
				);
				return null;
			}
		},
		[askPermission, permissionStatus]
	);

	const subscribeToLocationUpdates = useCallback(
		async (
			callback: LocationUpdateCallback,
			options?: Location.LocationOptions
		): Promise<Location.LocationSubscription | null> => {
			try {
				if (permissionStatus !== "granted") {
					const hasPermission =
						await askPermission();
					if (!hasPermission)
						throw new Error(
							"Location permission not granted"
						);
				}
				const subscription =
					await Location.watchPositionAsync(
						options ?? {},
						(newLocation) => {
							setLocation(newLocation);
							callback(newLocation);
						}
					);
				return subscription;
			} catch (err: unknown) {
				const errorMessage =
					err instanceof Error
						? err.message
						: String(err);
				setError(
					errorMessage ||
						"Error subscribing to location updates"
				);
				return null;
			}
		},
		[askPermission, permissionStatus]
	);

	const enableLocationAsync = useCallback(
		async (
			options?: Location.LocationOptions
		): Promise<Location.LocationObject> => {
			const currentPermission =
				await Location.getForegroundPermissionsAsync();
			if (
				currentPermission.status ===
				Location.PermissionStatus.GRANTED
			) {
				if (!location) {
					const loc = await fetchLocation(
						options
					);
					if (loc) return loc;
					throw new Error(
						"Unable to fetch location."
					);
				} else {
					return location;
				}
			} else if (!currentPermission.canAskAgain) {
				throw new Error(
					"Geolocation is not available. Please enable it in your app settings."
				);
			} else {
				const granted = await askPermission();
				if (granted) {
					const loc = await fetchLocation(
						options
					);
					if (loc) return loc;
					throw new Error(
						"Unable to fetch location after permission was granted."
					);
				} else {
					throw new Error(
						"Permission denied. Unable to fetch geolocation."
					);
				}
			}
		},
		[location, fetchLocation, askPermission]
	);

	return {
		location,
		permissionStatus,
		error,
		canAskAgain,
		askPermission,
		fetchLocation,
		subscribeToLocationUpdates,
		enableLocationAsync,
	};
};

export default useExpoLocation;
