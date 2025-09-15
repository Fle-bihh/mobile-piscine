import { ActivityIndicator, Text, View } from "react-native";
import { getCentralTextScreenStyles } from "./central-text.styles";
import { usePositionContext } from "@/contexts/position.context";
import { useEffect } from "react";
import { useWeatherContext } from "@/contexts/weather.context";
import { WeatherData } from "@/types/weather.types";

interface CentralTextScreenProps {
	title: string;
	weatherComponent: React.FC<{ weather: WeatherData | null }>;
}

export default function CentralTextScreen({
	title,
	weatherComponent: WeatherComponent,
}: CentralTextScreenProps) {
	const styles = getCentralTextScreenStyles();
	const { currentPosition, error: positionError, loading } = usePositionContext();
	const { fetchWeather, weather, error: weatherError, clearWeather } = useWeatherContext();

	useEffect(() => {
		if (currentPosition) fetchWeather(currentPosition[0], currentPosition[1]);
		else clearWeather();
	}, [currentPosition, fetchWeather, clearWeather]);

	const errorText = positionError || weatherError;

	if (errorText) {
		return (
			<View style={styles.container}>
				<Text style={styles.contentError}>{errorText}</Text>
			</View>
		);
	}

	const contentText = currentPosition ? currentPosition[2] : "Position not defined";

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			{loading ? <ActivityIndicator /> : <Text style={styles.content}>{contentText}</Text>}
			<WeatherComponent weather={weather} />
		</View>
	);
}
