import CentralTextScreen from "@/screens/central-text.screen";
import WeeklyWeather from "@/ui/weather-display/weekly-weather.component";

export default function WeeklyView() {
	return <CentralTextScreen weatherComponent={WeeklyWeather} />;
}
