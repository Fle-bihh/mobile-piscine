import WeatherPageScreen from "@/screens/weather-page.screen";
import TodayWeather from "@/ui/weather-display/today/today-weather.component";

export default function TodayView() {
	return <WeatherPageScreen weatherComponent={TodayWeather} />;
}
