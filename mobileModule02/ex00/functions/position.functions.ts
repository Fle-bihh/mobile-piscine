import * as Location from "expo-location";

export function getLocationString(
	location: Location.LocationObject
) {
	return `${location.coords.longitude} - ${location.coords.latitude}`;
}
