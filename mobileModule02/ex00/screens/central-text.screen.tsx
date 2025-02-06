import {
	ActivityIndicator,
	Text,
	View,
} from "react-native";
import { getCentralTextScreenStyles } from "./central-text.styles";
import { usePositionContext } from "@/contexts/position.context";

interface CentralTextScreenProps {
	title: string;
}
export default function CentralTextScreen({
	title,
}: CentralTextScreenProps) {
	const styles = getCentralTextScreenStyles();
	const { positionString } = usePositionContext();

	const Content = () => (
		<Text style={styles.content}>{positionString}</Text>
	);
	return (
		<View style={styles.container}>
			<Text>{title}</Text>
			<Content />
		</View>
	);
}
