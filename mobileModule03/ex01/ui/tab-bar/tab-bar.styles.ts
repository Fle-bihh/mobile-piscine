import { EPalette } from "@/constants/colors.constants";
import { EAppIcons } from "@/constants/icons.constants";
import { getAppIconName } from "@/functions/icons.functions";
import { Platform, StyleSheet } from "react-native";

export const getTabBarStyles = () => {
	const isWeb = Platform.OS === "web";
	return StyleSheet.create({
		container: {
			paddingTop: 12,
			paddingBottom: isWeb ? 24 : 0,
			display: "flex",
			flexDirection: "row",
			borderTopWidth: 0.5,
			borderTopColor: EPalette.GreyOpacity,
		},
	});
};

interface TabBarLabelStylesProps {
	isActive: boolean;
	icon: EAppIcons;
}
export const getTabBarLabelStyles = ({
	isActive,
	icon,
}: TabBarLabelStylesProps) => {
	const iconName = getAppIconName(icon);
	const iconSize = 24;
	const iconColor = isActive ? EPalette.TextPrimary : EPalette.TextSecondary;
	const styles = StyleSheet.create({
		labelContainer: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			gap: 8,
		},
		label: {
			color: isActive ? EPalette.TextPrimary : EPalette.TextSecondary,
			fontSize: 10,
			fontWeight: isActive ? "500" : "300",
		},
	});

	return { styles, iconName, iconColor, iconSize };
};
