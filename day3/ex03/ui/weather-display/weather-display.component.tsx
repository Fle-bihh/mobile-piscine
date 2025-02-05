import {
	getWeatherDescription,
	getWeatherSummary,
} from "@/functions/weather.functions";
import { WeatherData } from "@/types/weather.types";
import { Text, View } from "react-native";

const CurrentWeather = ({ weather }: { weather: WeatherData | null }) => {
	if (!weather) return <Text>No data available</Text>;

	// Get current time in "YYYY-MM-DDTHH:00" format
	const currentTime = new Date().toISOString().slice(0, 13); // "YYYY-MM-DDTHH"

	// Find the closest available weather data to current time
	const closestIndex = weather.hourly.time.findIndex((time) =>
		time.startsWith(currentTime)
	);

	// If no exact match, use the last available data
	const index =
		closestIndex !== -1 ? closestIndex : weather.hourly.time.length - 1;

	const temperature = weather.hourly.temperature_2m[index];
	const windSpeed = weather.hourly.windspeed_10m[index];
	const weatherDescription = getWeatherDescription(
		weather.hourly.weathercode[index]
	);

	return (
		<>
			<Text>Temp: {temperature}°C</Text>
			<Text>Weather: {weatherDescription}</Text>
			<Text>Wind Speed: {windSpeed} km/h</Text>
		</>
	);
};

const TodayWeather = ({ weather }: { weather: WeatherData | null }) => {
	if (!weather) return <Text>No data available</Text>;

	// Get today's date in the format "YYYY-MM-DD"
	const todayDate = new Date().toISOString().split("T")[0];

	// Find the indexes where hourly timestamps belong to today
	const todayIndexes = weather.hourly.time.reduce((indexes, time, index) => {
		if (time.startsWith(todayDate)) indexes.push(index);
		return indexes;
	}, [] as number[]);

	return (
		<View>
			{todayIndexes.map((index) => (
				<Text
					key={weather.hourly.time[index]}
					style={{ fontSize: 12, textAlign: "center" }}
				>
					{weather.hourly.time[index].split("T")[1]}:{" "}
					{weather.hourly.temperature_2m[index]}°C,{" "}
					{getWeatherDescription(weather.hourly.weathercode[index])},{" "}
					{weather.hourly.windspeed_10m[index]} km/h
				</Text>
			))}
		</View>
	);
};

const WeeklyWeather = ({ weather }: { weather: WeatherData | null }) => {
	if (!weather) return <Text>No data available</Text>;

	return (
		<>
			{weather.daily.time.map((date, index) => (
				<Text key={date}>
					{date}: Min {weather.daily.temperature_2m_min[index]}°C, Max{" "}
					{weather.daily.temperature_2m_max[index]}°C,{" "}
					{getWeatherDescription(weather.daily.weathercode[index])}
				</Text>
			))}
		</>
	);
};

const WeatherDisplay = { CurrentWeather, TodayWeather, WeeklyWeather };
export default WeatherDisplay;
