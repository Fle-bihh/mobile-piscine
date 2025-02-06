import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { usePositionContext } from "@/contexts/position.context";
import { getPositionButtonStyles } from "./position-button.styles";
import { EPositionType } from "@/types/position.types";
import { useMemo } from "react";

export default function PositionButton() {
	const { enableGeolocation, currentPosition } = usePositionContext();
	const isGeolocation = useMemo(
		() => (currentPosition ? currentPosition[1] === EPositionType.Geolocation : false),
		[currentPosition]
	);
	const { styles, iconName, iconSize, iconColor } = getPositionButtonStyles({
		isGeolocation,
	});

	function onPress() {
		enableGeolocation();
	}

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Ionicons name={iconName} size={iconSize} color={iconColor} />
		</TouchableOpacity>
	);
}
