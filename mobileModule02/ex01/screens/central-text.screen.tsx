import { ActivityIndicator, Text, View } from "react-native";
import { getCentralTextScreenStyles } from "./central-text.styles";
import { usePositionContext } from "@/contexts/position.context";
import { useEffect, useMemo } from "react";
import { useWeatherContext } from "@/contexts/weather.context";
import { log } from "@/functions/log.functions";
import { getWeatherSummary } from "@/functions/weather.functions";

interface CentralTextScreenProps {
	title: string;
}
export default function CentralTextScreen({ title }: CentralTextScreenProps) {
	const styles = getCentralTextScreenStyles();
	const { currentPosition, error, loading } = usePositionContext();
	const { fetchWeather, weather, clearWeather } = useWeatherContext();
	const contentText = useMemo(
		() => (error ? error : currentPosition ? currentPosition[2] : "Position not defined"),
		[error, currentPosition]
	);

	useEffect(() => {
		if (currentPosition) fetchWeather(currentPosition[0], currentPosition[1]);
		else clearWeather();
	}, [currentPosition, fetchWeather]);

	const Content = () => <Text style={styles.content}>{contentText}</Text>;
	return (
		<View style={styles.container}>
			<Text>{title}</Text>
			{loading ? <ActivityIndicator /> : <Content />}
			{weather && <Text>{getWeatherSummary(weather)}</Text>}
		</View>
	);
}
