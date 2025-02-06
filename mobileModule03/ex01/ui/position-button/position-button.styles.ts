import { StyleSheet } from "react-native";
import { EAppIcons } from "@/constants/icons.constants";
import { getAppIconName } from "@/functions/icons.functions";
import { EPalette } from "@/constants/colors.constants";

export function getPositionButtonStyles() {
	const iconName = getAppIconName(EAppIcons.Geoloca);
	const iconSize = 20;
	const styles = StyleSheet.create({
		container: {
			backgroundColor: EPalette.GreyOpacity,
			borderRadius: 32,
			padding: 4,
		},
	});

	return { iconName, iconSize, styles };
}
