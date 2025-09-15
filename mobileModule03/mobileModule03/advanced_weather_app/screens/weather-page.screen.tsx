import { ScrollView, useWindowDimensions } from "react-native";
import { getWeatherPageScreenStyles } from "./weather-page.styles";
import { usePositionContext } from "@/contexts/position.context";
import { useEffect, useMemo } from "react";
import { useWeatherContext } from "@/contexts/weather.context";
import { WeatherData } from "@/types/weather.types";
import LocationDisplay from "@/ui/location-display/location-display.component";
import Loader from "@/ui/loader/loader.component";
import { useErrorContext } from "@/contexts/error.context";
import ErrorDisplay from "@/ui/error/error-display.component";

interface WeatherPageScreenProps {
	weatherComponent: React.FC<{ weather: WeatherData | null }>;
}
export default function WeatherPageScreen({
	weatherComponent: WeatherComponent,
}: WeatherPageScreenProps) {
	const styles = getWeatherPageScreenStyles();
	const { currentPosition, loading } = usePositionContext();
	const { fetchWeather, weather, clearWeather } = useWeatherContext();
	const { height } = useWindowDimensions();
	const { error } = useErrorContext();

	const scrollEnabled = useMemo(() => height < 730, [height]);

	useEffect(() => {
		if (currentPosition)
			fetchWeather(currentPosition[0].latitude, currentPosition[0].longitude);
		else clearWeather();
	}, [currentPosition, fetchWeather]);

	if (error) return <ErrorDisplay error={error} />;

	const Content = () => (
		<>
			<LocationDisplay position={currentPosition} />
			<WeatherComponent weather={weather} />
		</>
	);

	return (
		<ScrollView
			scrollEnabled={scrollEnabled}
			contentContainerStyle={styles.contentContainer}
			style={styles.container}
		>
			{loading ? <Loader /> : <Content />}
		</ScrollView>
	);
}
