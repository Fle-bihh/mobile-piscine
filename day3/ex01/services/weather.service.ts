// services/weather.service.ts
import axios from "axios";
import { CitySuggestion, WeatherData } from "@/types/weather.types";
import { log } from "@/functions/log.functions";

export class WeatherService {
	private readonly weatherBaseUrl = "https://api.open-meteo.com/v1";
	private readonly geocodingBaseUrl =
		"https://geocoding-api.open-meteo.com/v1";
	private readonly nominatimBaseUrl = "https://nominatim.openstreetmap.org";
	private readonly bigDataCloudUrl =
		"https://api.bigdatacloud.net/data/reverse-geocode-client";

	/**
	 * Search for cities matching a query.
	 */
	async searchCity(
		query: string,
		limit: number = 5
	): Promise<CitySuggestion[]> {
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

	/**
	 * Fetch weather data by geographic coordinates.
	 */
	async getWeatherByCoordinates(
		latitude: number,
		longitude: number
	): Promise<WeatherData> {
		const response = await axios.get(`${this.weatherBaseUrl}/forecast`, {
			params: {
				latitude,
				longitude,
				hourly: "temperature_2m,windspeed_10m",
			},
		});
		return response.data;
	}

	async getCityFromCoordinates(
		latitude: number,
		longitude: number,
		isWeb?: boolean
	): Promise<CitySuggestion | null> {
		const fetchFunction = isWeb
			? this.getCityFromCoordinates__web.bind(this)
			: this.getCityFromCoordinates__mobile.bind(this);
		return await fetchFunction(latitude, longitude);
	}

	/**
	 * Reverse Geocode: Get city name from coordinates using OpenStreetMap Nominatim API.
	 */
	private async getCityFromCoordinates__mobile(
		latitude: number,
		longitude: number
	): Promise<CitySuggestion | null> {
		const response = await axios.get(`${this.nominatimBaseUrl}/reverse`, {
			params: {
				lat: latitude,
				lon: longitude,
				format: "json", // Ensure JSON response
			},
		});

		const data = response.data;
		if (!data || !data.address) return null;

		return {
			name:
				data.address.city ||
				data.address.town ||
				data.address.village ||
				"Unknown",
			region: data.address.state || "",
			country: data.address.country || "",
			latitude,
			longitude,
		};
	}

	private async getCityFromCoordinates__web(
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

			log(response);
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
			console.error("Reverse geocoding failed:", error);
			return null;
		}
	}
}
