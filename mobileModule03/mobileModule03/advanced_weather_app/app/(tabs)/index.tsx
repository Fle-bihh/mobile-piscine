import WeatherPageScreen from "@/screens/weather-page.screen";
import CurrentWeather from "@/ui/weather-display/current/current-weather.component";

export default function CurrentlyView() {
	return <WeatherPageScreen weatherComponent={CurrentWeather} />;
}
