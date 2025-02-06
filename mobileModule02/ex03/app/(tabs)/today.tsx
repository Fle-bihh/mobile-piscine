import CentralTextScreen from "@/screens/central-text.screen";
import WeatherDisplay from "@/ui/weather-display/weather-display.component";

export default function TodayView() {
	return (
		<CentralTextScreen
			title="Today"
			weatherComponent={WeatherDisplay.TodayWeather}
		/>
	);
}
