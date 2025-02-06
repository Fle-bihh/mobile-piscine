import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { usePositionContext } from "@/contexts/position.context";
import { getPositionButtonStyles } from "./position-button.styles";

export default function PositionButton() {
	const { styles, iconName, iconSize } =
		getPositionButtonStyles();
	const { setCurrentPosition } = usePositionContext();

	function onPress() {
		setCurrentPosition("Geolocation");
	}

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={onPress}
		>
			<Ionicons name={iconName} size={iconSize} />
		</TouchableOpacity>
	);
}
