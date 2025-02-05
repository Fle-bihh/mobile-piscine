import { ActivityIndicator, View } from "react-native";
import { getCentralTextScreenStyles } from "./central-text.styles";
import { usePositionContext } from "@/contexts/position.context";
import { useEffect } from "react";
import { useWeatherContext } from "@/contexts/weather.context";
import { WeatherData } from "@/types/weather.types";
import LocationDisplay from "@/ui/location-display/location-display.component";
import Loader from "@/ui/loader/loader.component";

interface CentralTextScreenProps {
	weatherComponent: React.FC<{ weather: WeatherData | null }>;
}
export default function CentralTextScreen({
	weatherComponent: WeatherComponent,
}: CentralTextScreenProps) {
	const styles = getCentralTextScreenStyles();
	const {
		currentPosition,
		error: positionError,
		loading,
	} = usePositionContext();
	const { fetchWeather, weather, error: weatherError } = useWeatherContext();

	useEffect(() => {
		if (currentPosition)
			fetchWeather(
				currentPosition[0].latitude,
				currentPosition[0].longitude
			);
	}, [currentPosition, fetchWeather]);

	const Content = () => (
		<>
			<LocationDisplay
				position={currentPosition}
				error={positionError || weatherError}
			/>
			<WeatherComponent weather={weather} />
		</>
	);

	return (
		<View style={styles.container}>
			{loading ? <Loader /> : <Content />}
		</View>
	);
}
