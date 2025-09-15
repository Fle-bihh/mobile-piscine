import { CitySuggestion } from "@/types/weather.types";

export function getLocationString(city: CitySuggestion): string {
	return `${city.name}, ${city.country}, ${city.region}`;
}
