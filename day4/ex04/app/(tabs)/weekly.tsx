import WeatherPageScreen from "@/screens/weather-page.screen";
import WeeklyWeather from "@/ui/weather-display/weekly/weekly-weather.component";

export default function WeeklyView() {
	return <WeatherPageScreen weatherComponent={WeeklyWeather} />;
}
