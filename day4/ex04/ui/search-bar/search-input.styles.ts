import { EPalette } from "@/constants/colors.constants";
import { EAppIcons } from "@/constants/icons.constants";
import { getAppIconName } from "@/functions/icons.functions";
import { Platform, StyleSheet } from "react-native";

export default function getSearchInputStyles() {
	const isWeb = Platform.OS === "web";
	const styles = StyleSheet.create({
		container: {
			backgroundColor: EPalette.GreyOpacity,
			paddingVertical: 4,
			paddingHorizontal: 16,
			borderRadius: 8,
			flex: 1,
			flexDirection: "row",
			gap: 8,
			alignItems: "center",
		},
		label: {
			flex: 1,
			color: EPalette.TextPrimary,
			paddingTop: isWeb ? 2 : 0,
		},
	});

	const placeholderTextColor = EPalette.TextSecondary;

	const searchIcon = getAppIconName(EAppIcons.Search);
	const crossIcon = getAppIconName(EAppIcons.Cross);
	const iconSize = 16;
	const iconColor = EPalette.TextSecondary;

	return {
		styles,
		placeholderTextColor,
		searchIcon,
		crossIcon,
		iconSize,
		iconColor,
	};
}
