import { View } from "react-native";
import React from "react";
import { HourlyWeatherCardData, WeatherData } from "@/types/weather.types";
import getTodayWeatherStyles from "./today-weather.styles";
import TemperaturChart from "./temperature-chart/temperature-chart.component";
import useTodayWeather from "@/hooks/today-weather.hook";
import NoWeatherData from "../no-weather-data.component";
import CardSlider from "@/ui/card-slider/card-slider.component";
import HourlyWeatherCard from "./hourly-weather-card/hourly-weather-card.component";

interface TodayWeatherProps {
	weather: WeatherData | null;
}
export default function TodayWeather({ weather }: TodayWeatherProps) {
	if (!weather) return <NoWeatherData />;

	const { styles } = getTodayWeatherStyles();

	const { chartData, sliderData } = useTodayWeather({ weather });

	return (
		<View style={styles.container}>
			<TemperaturChart temperatures={chartData} />
			<CardSlider<HourlyWeatherCardData>
				data={sliderData}
				cardComponent={HourlyWeatherCard}
			/>
		</View>
	);
}
