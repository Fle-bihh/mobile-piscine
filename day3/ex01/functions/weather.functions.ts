import { WeatherData } from "@/types/weather.types";

export function getWeatherSummary(weatherData: WeatherData): string {
	if (!weatherData || !weatherData.hourly?.temperature_2m?.length) {
		return "Weather data unavailable";
	}

	const currentHourIndex = new Date().getHours(); // Get the current hour index
	const temperature = weatherData.hourly.temperature_2m[currentHourIndex];
	const windspeed = weatherData.hourly.windspeed_10m[currentHourIndex];

	return `🌡️ ${temperature}°C | 💨 ${windspeed} km/h`;
}
