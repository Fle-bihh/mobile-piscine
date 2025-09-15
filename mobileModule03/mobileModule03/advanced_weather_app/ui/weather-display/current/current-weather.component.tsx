import { getWeatherInfo } from "@/functions/weather.functions";
import { WeatherData } from "@/types/weather.types";
import { Text, View } from "react-native";
import useCurrentWeatherStyles from "./current-weather.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EPalette } from "@/constants/colors.constants";
import NoWeatherData from "../no-weather-data.component";

const CurrentWeather = ({ weather }: { weather: WeatherData | null }) => {
	if (!weather) return <NoWeatherData />;

	const { styles, weatherIconSize } = useCurrentWeatherStyles();

	const currentTime = new Date().toISOString().slice(0, 13);

	const closestIndex = weather.hourly.time.findIndex((time) =>
		time.startsWith(currentTime)
	);

	const index =
		closestIndex !== -1 ? closestIndex : weather.hourly.time.length - 1;

	const temperature = weather.hourly.temperature_2m[index];
	const windSpeed = weather.hourly.windspeed_10m[index];
	const weatherInfo = getWeatherInfo(weather.hourly.weathercode[index]);

	return (
		<View style={styles.container}>
			<Text style={styles.temperature}>{temperature}°C</Text>
			<View style={styles.descriptionContainer}>
				<Ionicons
					name={weatherInfo.icon}
					color={EPalette.Secondary}
					size={weatherIconSize}
				/>
				<Text style={styles.info}>{weatherInfo.description}</Text>
			</View>
			<Text style={styles.wind}>{`💨 ${windSpeed} km/h`}</Text>
		</View>
	);
};

export default CurrentWeather;
