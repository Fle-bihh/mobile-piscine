import { StyleSheet } from "react-native";
import { EAppIcons } from "@/constants/icons.constants";
import { getAppIconName } from "@/functions/icons.functions";
import { EPalette } from "@/constants/colors.constants";

interface PositionButtonStylesProps {
	isGeolocation: boolean;
}
export function getPositionButtonStyles({
	isGeolocation,
}: PositionButtonStylesProps) {
	const iconName = getAppIconName(EAppIcons.Geoloca);
	const iconSize = 20;
	const iconColor = isGeolocation ? EPalette.Primary : EPalette.TextPrimary;
	const styles = StyleSheet.create({
		container: {
			backgroundColor: EPalette.GreyOpacity,
			borderRadius: 32,
			padding: 4,
		},
	});

	return { iconName, iconSize, iconColor, styles };
}
