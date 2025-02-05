import { CitySuggestion } from "./weather.types";

export type TPosition = [number, number, string, EPositionType];

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
