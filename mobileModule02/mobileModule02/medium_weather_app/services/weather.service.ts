import axios from "axios";
import { CitySuggestion, WeatherData } from "@/types/weather.types";

export class WeatherService {
	private readonly weatherBaseUrl = "https://api.open-meteo.com/v1";
	private readonly geocodingBaseUrl = "https://geocoding-api.open-meteo.com/v1";
	private readonly bigDataCloudUrl = "https://api.bigdatacloud.net/data/reverse-geocode-client";

	async searchCity(query: string, limit: number = 5): Promise<CitySuggestion[]> {
		const response = await axios.get(`${this.geocodingBaseUrl}/search`, {
			params: {
				name: query,
				count: limit,
				format: "json",
				language: "en",
			},
		});

		const results = response.data.results as any[];
		if (!results) return [];

		return results.map((city) => ({
			name: city.name,
			region: city.admin1 || "",
			country: city.country,
			latitude: city.latitude,
			longitude: city.longitude,
		}));
	}

	async getWeatherByCoordinates(latitude: number, longitude: number): Promise<WeatherData> {
		const response = await axios.get(`${this.weatherBaseUrl}/forecast`, {
			params: {
				latitude,
				longitude,
				hourly: "temperature_2m,windspeed_10m,weathercode",
				daily: "temperature_2m_min,temperature_2m_max,weathercode",
				timezone: "auto",
			},
		});
		return response.data;
	}

	async getCityFromCoordinates(
		latitude: number,
		longitude: number
	): Promise<CitySuggestion | null> {
		try {
			const response = await axios.get(this.bigDataCloudUrl, {
				params: {
					latitude,
					longitude,
					localityLanguage: "en",
				},
			});

			const data = response.data;
			if (!data || !data.city) return null;

			return {
				name: data.city || data.locality || "Unknown",
				region: data.principalSubdivision || "",
				country: data.countryName || "",
				latitude,
				longitude,
			};
		} catch (error) {
			return null;
		}
	}
}
