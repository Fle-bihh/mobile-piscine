import { EAppIcons } from "@/constants/icons.constants";
import { getAppIconName } from "@/functions/icons.functions";
import { Platform, StyleSheet } from "react-native";

export default function getSearchInputStyles() {
	const isWeb = Platform.OS === "web";
	const styles = StyleSheet.create({
		container: {
			backgroundColor: "rgba(0,0,0,0.05)",
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
			color: "black",
			paddingTop: isWeb ? 2 : 0,
		},
	});

	const placeholderTextColor = "rgba(0,0,0,0.5)";

	const iconName = getAppIconName(EAppIcons.Search);
	const iconSize = 16;
	const iconColor = "rgba(0,0,0,0.5)";

	return {
		styles,
		placeholderTextColor,
		iconName,
		iconSize,
		iconColor,
	};
}
