export interface IPositionContext {
	positionString: string;
	setCustomPosition: (pos: string) => void;
	enableGeolocation: () => void;
}

export enum EPositionType {
	Custom = "custom",
	Geolocation = "geolocation",
	None = "none",
}
