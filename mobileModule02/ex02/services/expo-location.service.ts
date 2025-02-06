import * as Location from "expo-location";
export class ExpoLocationService {
	private permissionStatus: Location.PermissionStatus | undefined = undefined;

	private async askPermission(): Promise<boolean> {
		const { status } = await Location.requestForegroundPermissionsAsync();

		this.permissionStatus = status;
		if (status !== "granted") {
			return false;
		}
		return true;
	}

	private async fetchLocation(
		options?: Location.LocationOptions
	): Promise<Location.LocationObject | null> {
		if (this.permissionStatus !== "granted") {
			const hasPermission = await this.askPermission.bind(this)();
			if (!hasPermission) {
				throw new Error("Location permission not granted");
			}
		}
		const currentLocation = await Location.getCurrentPositionAsync(options ?? {});
		return currentLocation;
	}

	async enableLocationAsync(
		options?: Location.LocationOptions
	): Promise<Location.LocationObject> {
		const currentPermission = await Location.getForegroundPermissionsAsync();
		if (currentPermission.status === Location.PermissionStatus.GRANTED) {
			const loc = await this.fetchLocation.bind(this)(options);
			if (loc) return loc;
			throw new Error("Unable to fetch location.");
		} else if (!currentPermission.canAskAgain) {
			throw new Error("Geolocation is not available. Please enable it in your app settings.");
		} else {
			const granted = await this.askPermission.bind(this)();
			if (granted) {
				const loc = await this.fetchLocation.bind(this)(options);
				if (loc) return loc;
				throw new Error("Unable to fetch location after permission was granted.");
			} else {
				throw new Error("Permission denied. Unable to fetch geolocation.");
			}
		}
	}
}
