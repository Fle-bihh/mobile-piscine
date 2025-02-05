import CentralTextScreen from "@/screens/central-text.screen";
import WeatherDisplay from "@/ui/weather-display/weather-display.component";

export default function WeeklyView() {
	return (
		<CentralTextScreen
			title="Weekly"
			weatherComponent={WeatherDisplay.WeeklyWeather}
		/>
	);
}
