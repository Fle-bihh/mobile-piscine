import CentralTextScreen from "@/screens/central-text.screen";
import WeatherDisplay from "@/ui/weather-display/weather-display.component";

export default function CurrentlyView() {
	return (
		<CentralTextScreen
			title="Currently"
			weatherComponent={WeatherDisplay.CurrentWeather}
		/>
	);
}
