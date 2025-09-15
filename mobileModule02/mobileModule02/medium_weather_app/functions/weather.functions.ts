export function getWeatherDescription(code: number): string {
	const weatherMap: { [key: number]: string } = {
		0: "Clear sky",
		1: "Mainly clear",
		2: "Partly cloudy",
		3: "Overcast",
		45: "Fog",
		48: "Depositing rime fog",
		51: "Light drizzle",
		53: "Moderate drizzle",
		55: "Dense drizzle",
		61: "Light rain",
		63: "Moderate rain",
		65: "Heavy rain",
		80: "Light showers",
		81: "Moderate showers",
		82: "Violent showers",
		95: "Thunderstorm",
		99: "Thunderstorm with heavy hail",
	};

	return weatherMap[code] || "Unknown";
}
