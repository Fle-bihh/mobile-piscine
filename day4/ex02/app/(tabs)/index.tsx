import CentralTextScreen from "@/screens/central-text.screen";
import CurrentWeather from "@/ui/weather-display/current-weather.component";

export default function CurrentlyView() {
	return (
		<CentralTextScreen
			title="Currently"
			weatherComponent={CurrentWeather}
		/>
	);
}
