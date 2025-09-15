import { View, Text } from "react-native";
import getLocationDisplayStyles from "./location-display.styles";
import { TPosition } from "@/types/position.types";
import ErrorDisplay from "../error/error-display.component";
import { useErrorContext } from "@/contexts/error.context";

interface LocationDisplayProps {
	position: TPosition | undefined;
}

export default function LocationDisplay({ position }: LocationDisplayProps) {
	if (!position) return null;

	const { styles } = getLocationDisplayStyles();

	const city = position[0];
	const title = city.name;
	const subtitle = `${city.region}, ${city.country}`;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.subtitle}>{subtitle}</Text>
		</View>
	);
}
