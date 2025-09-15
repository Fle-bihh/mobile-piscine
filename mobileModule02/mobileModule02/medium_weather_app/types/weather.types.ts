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

export interface IWeatherContext {
	citySuggestions: CitySuggestion[];
	weather: WeatherData | null;
	error: string | null;
	loading: boolean;
	searchCities: (query: string) => Promise<void>;
	fetchWeather: (latitude: number, longitude: number) => Promise<void>;
	clearSuggestions: () => void;
	clearWeather: () => void;
}
