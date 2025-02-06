import { ListRenderItemInfo, Text, View } from "react-native";
import React from "react";
import useHourlyWeatherCardStyles from "./hourly-weather-card.styles";
import { HourlyWeatherCardData } from "@/types/weather.types";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HourlyWeatherCard({ item }: ListRenderItemInfo<HourlyWeatherCardData>) {
	const { styles, iconColor, iconSize } = useHourlyWeatherCardStyles();
	return (
		<View style={styles.container}>
			<Text style={styles.hour}>{item.hour}</Text>
			<Text style={styles.temperature}>{item.temperature}°C</Text>
			<Ionicons name={item.iconName} color={iconColor} size={iconSize} />
			<Text style={styles.wind}>{`💨 ${item.windSpeed} km/h`}</Text>
		</View>
	);
}
