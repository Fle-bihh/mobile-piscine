import { ActivityIndicator, ScrollView, useWindowDimensions, View } from "react-native";
import { getWeatherPageScreenStyles } from "./weather-page.styles";
import { usePositionContext } from "@/contexts/position.context";
import { useEffect, useMemo } from "react";
import { useWeatherContext } from "@/contexts/weather.context";
import { WeatherData } from "@/types/weather.types";
import LocationDisplay from "@/ui/location-display/location-display.component";
import Loader from "@/ui/loader/loader.component";

interface WeatherPageScreenProps {
	weatherComponent: React.FC<{ weather: WeatherData | null }>;
}
export default function WeatherPageScreen({
	weatherComponent: WeatherComponent,
}: WeatherPageScreenProps) {
	const styles = getWeatherPageScreenStyles();
	const { currentPosition, error: positionError, loading } = usePositionContext();
	const { fetchWeather, weather, error: weatherError } = useWeatherContext();
	const { height } = useWindowDimensions();

	const scrollEnabled = useMemo(() => height < 730, [height]);

	useEffect(() => {
		if (currentPosition)
			fetchWeather(currentPosition[0].latitude, currentPosition[0].longitude);
	}, [currentPosition, fetchWeather]);

	const Content = () => (
		<>
			<LocationDisplay position={currentPosition} error={positionError || weatherError} />
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
