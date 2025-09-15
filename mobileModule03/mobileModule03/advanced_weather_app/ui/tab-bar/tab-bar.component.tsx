import { NavigationState, SceneRendererProps, TabDescriptor } from "react-native-tab-view";
import { getTabBarLabelStyles, getTabBarStyles } from "./tab-bar.styles";
import { Text, TouchableOpacity, View } from "react-native";
import { AppRoute } from "@/app/(tabs)/_layout";
import Ionicons from "@expo/vector-icons/Ionicons";

type TabBarProps = SceneRendererProps & {
	navigationState: NavigationState<AppRoute>;
	options: Record<string, TabDescriptor<AppRoute>> | undefined;
};
export function TabBar(props: TabBarProps) {
	const styles = getTabBarStyles();
	return (
		<View style={styles.container}>
			{props.navigationState.routes.map(({ key, title, icon }, index) => {
				const getIsActive = () => props.navigationState.index === index;
				const {
					styles: labelStyles,
					iconColor,
					iconName,
					iconSize,
				} = getTabBarLabelStyles({ isActive: getIsActive(), icon });
				const onPress = () => props.jumpTo(key);

				return (
					<TouchableOpacity
						onPress={onPress}
						style={labelStyles.labelContainer}
						key={key}
					>
						<Ionicons name={iconName} size={iconSize} color={iconColor} />
						<Text style={labelStyles.label}>{title}</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}
