import { getWeatherInfo } from "@/functions/weather.functions";
import {
	ChartTemperature,
	HourlyWeatherCardData,
	WeatherData,
} from "@/types/weather.types";
import { useMemo } from "react";

interface TodayWeatherHookProps {
	weather: WeatherData;
}
export default function useTodayWeather({ weather }: TodayWeatherHookProps) {
	const todayDate = new Date().toISOString().split("T")[0];

	const todayIndexes = useMemo(
		() =>
			weather.hourly.time.reduce((indexes, time, index) => {
				if (time.startsWith(todayDate)) indexes.push(index);
				return indexes;
			}, [] as number[]),
		[todayDate, weather]
	);

	const chartData: ChartTemperature[] = useMemo(
		() =>
			todayIndexes.map((index) => ({
				hour: weather.hourly.time[index].split("T")[1],
				temperature: weather.hourly.temperature_2m[index],
			})),
		[todayIndexes]
	);

	const sliderData: HourlyWeatherCardData[] = useMemo(
		() =>
			todayIndexes.map((index) => {
				const hour = weather.hourly.time[index].split("T")[1];
				const temperature = weather.hourly.temperature_2m[index];
				const iconName = getWeatherInfo(
					weather.hourly.weathercode[index]
				).icon;
				const windSpeed = weather.hourly.windspeed_10m[index];
				return { hour, temperature, iconName, windSpeed };
			}),
		[todayIndexes]
	);

	return { chartData, sliderData };
}
