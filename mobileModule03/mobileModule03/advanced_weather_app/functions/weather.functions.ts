import { TIonicon } from "@/types/ionicons";

export function getWeatherInfo(code: number): {
	description: string;
	icon: TIonicon;
	color: string;
} {
	const weatherMap: {
		[key: number]: { description: string; icon: TIonicon; color: string };
	} = {
		0: { description: "Clear sky", icon: "sunny", color: "#FFD700" },
		1: {
			description: "Mainly clear",
			icon: "partly-sunny",
			color: "#FFA500",
		},
		2: {
			description: "Partly cloudy",
			icon: "cloud-outline",
			color: "#808080",
		},
		3: { description: "Overcast", icon: "cloud", color: "#696969" },
		45: { description: "Fog", icon: "cloudy", color: "#A9A9A9" },
		48: {
			description: "Depositing rime fog",
			icon: "cloudy-night",
			color: "#778899",
		},
		51: { description: "Light drizzle", icon: "rainy", color: "#00BFFF" },
		53: {
			description: "Moderate drizzle",
			icon: "rainy-outline",
			color: "#4682B4",
		},
		55: { description: "Dense drizzle", icon: "rainy", color: "#1E90FF" },
		61: { description: "Light rain", icon: "rainy", color: "#00CED1" },
		63: { description: "Moderate rain", icon: "rainy", color: "#4169E1" },
		65: { description: "Heavy rain", icon: "rainy", color: "#00008B" },
		80: { description: "Light showers", icon: "rainy", color: "#20B2AA" },
		81: {
			description: "Moderate showers",
			icon: "rainy",
			color: "#4682B4",
		},
		82: { description: "Violent showers", icon: "rainy", color: "#0000CD" },
		95: {
			description: "Thunderstorm",
			icon: "thunderstorm",
			color: "#8B0000",
		},
		99: {
			description: "Thunderstorm with heavy hail",
			icon: "thunderstorm",
			color: "#4B0082",
		},
	};

	return (
		weatherMap[code] || {
			description: "Unknown",
			icon: "help-circle",
			color: "#808080",
		}
	);
}
