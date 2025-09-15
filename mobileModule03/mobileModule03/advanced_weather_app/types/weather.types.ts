import { TIonicon } from "./ionicons";

export interface CitySuggestion {
	name: string;
	region: string;
	country: string;
	latitude: number;
	longitude: number;
}

export interface WeatherData {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;

	hourly_units: {
		time: string;
		temperature_2m: string;
		windspeed_10m: string;
		weathercode: string;
	};

	hourly: {
		time: string[];
		temperature_2m: number[];
		windspeed_10m: number[];
		weathercode: number[];
	};

	daily_units: {
		time: string;
		temperature_2m_min: string;
		temperature_2m_max: string;
		weathercode: string;
	};

	daily: {
		time: string[];
		temperature_2m_min: number[];
		temperature_2m_max: number[];
		weathercode: number[];
	};
}

export enum EChartTemperatureType {
	Hourly = "hourly",
	Weekly = "weekly",
}

export type TChartTemperature = HourlyChartTemperature | WeeklyChartTemperature;
export interface IChartTemperatures {
	type: EChartTemperatureType;
	temperatures: TChartTemperature[];
}

interface HourlyChartTemperature {
	hour: string;
	temperature: number;
}

export interface IHourlyChartTemperatures extends IChartTemperatures {
	type: EChartTemperatureType.Hourly;
	temperatures: HourlyChartTemperature[];
}

export interface HourlyWeatherCardData {
	hour: string;
	temperature: number;
	iconName: TIonicon;
	windSpeed: number;
}

export interface IWeatherContext {
	citySuggestions: CitySuggestion[];
	weather: WeatherData | null;
	loading: boolean;
	searchCities: (query: string) => Promise<void>;
	fetchWeather: (latitude: number, longitude: number) => Promise<void>;
	clearSuggestions: () => void;
	clearWeather: () => void;
}

interface WeeklyChartTemperature {
	day: string;
	minTemp: number;
	maxTemp: number;
}

export interface IWeeklyChartTemperatures extends IChartTemperatures {
	type: EChartTemperatureType.Weekly;
	temperatures: WeeklyChartTemperature[];
}

export interface WeeklyWeatherCardData {
	day: string;
	minTemp: number;
	maxTemp: number;
	iconName: TIonicon;
}
