import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WeatherData } from "@/types/weather.types";
import { getWeatherInfo } from "@/functions/weather.functions";
import getWeeklyWeatherStyles from "./weekly-weather.styles";

export default function WeeklyWeather({ weather }: { weather: WeatherData | null }) {
	if (!weather) return null;

	const { styles } = getWeeklyWeatherStyles();
	return (
		<>
			{weather.daily.time.map((date, index) => (
				<Text key={date} style={styles.text}>
					{date}: Min {weather.daily.temperature_2m_min[index]}°C, Max{" "}
					{weather.daily.temperature_2m_max[index]}°C,{" "}
					{getWeatherInfo(weather.daily.weathercode[index]).description}
				</Text>
			))}
		</>
	);
}
