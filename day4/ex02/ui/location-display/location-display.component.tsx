import { View, Text } from "react-native";
import getLocationDisplayStyles from "./location-display.styles";
import { TPosition } from "@/types/position.types";

interface LocationDisplayProps {
	position: TPosition | undefined;
	error: string | null;
}

export default function LocationDisplay({
	position,
	error,
}: LocationDisplayProps) {
	if (!position) return <ErrorDisplay error={error || "Unknown error."} />;

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

interface ErrorDisplayProps {
	error: string;
}
function ErrorDisplay({ error }: ErrorDisplayProps) {
	return (
		<View>
			<Text>{error}</Text>
		</View>
	);
}
