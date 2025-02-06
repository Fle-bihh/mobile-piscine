import { ListRenderItemInfo, Text, View } from "react-native";
import React from "react";
import useWeeklyWeatherCardStyles from "./weekly-weather-card.styles";
import { WeeklyWeatherCardData } from "@/types/weather.types";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function WeeklyWeatherCard({ item }: ListRenderItemInfo<WeeklyWeatherCardData>) {
	const { styles, iconColor, iconSize } = useWeeklyWeatherCardStyles();

	return (
		<View style={styles.container}>
			<Text style={styles.day}>{item.day}</Text>
			<Ionicons name={item.iconName} color={iconColor} size={iconSize} />
			<Text style={styles.temperatureMax}>{`${item.maxTemp}°C`}</Text>
			<Text style={styles.temperatureMin}>{`${item.minTemp}°C`}</Text>
		</View>
	);
}
