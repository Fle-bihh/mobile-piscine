import { View } from "react-native";
import React from "react";
import { WeatherData } from "@/types/weather.types";
import getWeeklyWeatherStyles from "./weekly-weather.styles";
import useWeeklyWeather from "@/hooks/weekly-weather.hook";
import NoWeatherData from "../no-weather-data.component";
import CardSlider from "@/ui/card-slider/card-slider.component";
import WeeklyWeatherCard from "./weekly-weather-card/weekly-weather-card-component";
import TemperaturChart from "../temperature-chart/temperature-chart.component";

interface WeeklyWeatherProps {
	weather: WeatherData | null;
}
export default function WeeklyWeather({ weather }: WeeklyWeatherProps) {
	if (!weather) return <NoWeatherData />;

	const { styles } = getWeeklyWeatherStyles();
	const { chartData, sliderData } = useWeeklyWeather({ weather });

	return (
		<View style={styles.container}>
			<TemperaturChart temperatures={chartData} />
			<CardSlider data={sliderData} cardComponent={WeeklyWeatherCard} />
		</View>
	);
}
