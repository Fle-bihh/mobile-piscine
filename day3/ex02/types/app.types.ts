import { ExpoLocationService } from "@/services/expo-location.service";
import { WeatherService } from "@/services/weather.service";

export type AppServices = {
	weatherService: WeatherService;
	expoLocationService: ExpoLocationService;
} | null;
