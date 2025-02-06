import { CitySuggestion } from "./weather.types";

export type TPosition = [CitySuggestion, EPositionType];

export interface IPositionContext {
	currentPosition: TPosition | undefined;
	setCustomPosition: (city: CitySuggestion) => void;
	enableGeolocation: () => void;
	error: string | null;
	loading: boolean;
}

export enum EPositionType {
	Custom = "custom",
	Geolocation = "geolocation",
	None = "none",
}
