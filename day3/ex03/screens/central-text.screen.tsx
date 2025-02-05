import { ActivityIndicator, Text, View } from "react-native";
import { getCentralTextScreenStyles } from "./central-text.styles";
import { usePositionContext } from "@/contexts/position.context";
import { useEffect, useMemo } from "react";
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
	const {
		currentPosition,
		error: positionError,
		loading,
	} = usePositionContext();
	const { fetchWeather, weather, error: weatherError } = useWeatherContext();
	const contentText = useMemo(
		() =>
			positionError || weatherError
				? positionError || weatherError
				: currentPosition
				? currentPosition[2]
				: "Position not defined",
		[positionError, weatherError, currentPosition]
	);

	useEffect(() => {
		if (currentPosition)
			fetchWeather(currentPosition[0], currentPosition[1]);
	}, [currentPosition, fetchWeather]);

	const Content = () => <Text style={styles.content}>{contentText}</Text>;
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			{loading ? <ActivityIndicator /> : <Content />}
			<WeatherComponent weather={weather} />
		</View>
	);
}
