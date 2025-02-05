import CentralTextScreen from "@/screens/central-text.screen";
import TodayWeather from "@/ui/weather-display/today-weather.component";

export default function TodayView() {
	return <CentralTextScreen weatherComponent={TodayWeather} />;
}
