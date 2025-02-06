import { ScrollView, Text } from "react-native";
import React from "react";
import { WeatherData } from "@/types/weather.types";
import { getWeatherInfo } from "@/functions/weather.functions";
import getTodayWeatherStyles from "./today-weather.styles";

export default function TodayWeather({ weather }: { weather: WeatherData | null }) {
	if (!weather) return null;

	const { styles } = getTodayWeatherStyles();

	const todayDate = new Date().toISOString().split("T")[0];

	const todayIndexes = weather.hourly.time.reduce((indexes, time, index) => {
		if (time.startsWith(todayDate)) indexes.push(index);
		return indexes;
	}, [] as number[]);

	return (
		<ScrollView>
			{todayIndexes.map((index) => (
				<Text
					key={weather.hourly.time[index]}
					style={[{ fontSize: 12, textAlign: "center" }, styles.text]}
				>
					{weather.hourly.time[index].split("T")[1]}:{" "}
					{weather.hourly.temperature_2m[index]}°C,{" "}
					{getWeatherInfo(weather.hourly.weathercode[index]).description},{" "}
					{weather.hourly.windspeed_10m[index]} km/h
				</Text>
			))}
		</ScrollView>
	);
}
