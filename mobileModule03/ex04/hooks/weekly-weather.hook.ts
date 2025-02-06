import { useMemo } from "react";
import { WeeklyChartTemperature, WeeklyWeatherCardData, WeatherData } from "@/types/weather.types";
import { getWeatherInfo } from "@/functions/weather.functions";
import { format } from "date-fns";

interface UseWeeklyWeatherProps {
	weather: WeatherData;
}

export default function useWeeklyWeather({ weather }: UseWeeklyWeatherProps) {
	const chartData: WeeklyChartTemperature[] = useMemo(() => {
		return weather.daily.time.map((date, index) => ({
			day: format(new Date(date), "dd/MM"),
			minTemp: weather.daily.temperature_2m_min[index],
			maxTemp: weather.daily.temperature_2m_max[index],
		}));
	}, [weather]);

	const sliderData: WeeklyWeatherCardData[] = useMemo(() => {
		return weather.daily.time.map((date, index) => ({
			day: format(new Date(date), "dd/MM"),
			minTemp: weather.daily.temperature_2m_min[index],
			maxTemp: weather.daily.temperature_2m_max[index],
			iconName: getWeatherInfo(weather.daily.weathercode[index]).icon,
		}));
	}, [weather]);

	return { chartData, sliderData };
}
