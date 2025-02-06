import { NavigationState, SceneRendererProps, TabDescriptor } from "react-native-tab-view";
import { getTabBarLabelStyles, getTabBarStyles } from "./tab-bar.styles";
import { Text, TouchableOpacity, View } from "react-native";
import { AppRoute } from "@/app/(tabs)/_layout";
import Ionicons from '@expo/vector-icons/Ionicons';
import { getAppIconName } from "@/functions/icons.functions";

type TabBarProps = SceneRendererProps & {
    navigationState: NavigationState<AppRoute>;
    options: Record<string, TabDescriptor<AppRoute>> | undefined;
}
export function TabBar(props: TabBarProps) {
    const styles = getTabBarStyles();
    return (
        <View style={styles.container}>
            {props.navigationState.routes.map(({ key, title, icon }, index) => {
                const getIsActive = () => props.navigationState.index === index
                const labelStyles = getTabBarLabelStyles({ isActive: getIsActive() })
                const onPress = () => props.jumpTo(key);
                const iconName = getAppIconName(icon);
                const iconSize = 24;
                const iconColor = getIsActive() ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.5)"
                return (
                    <TouchableOpacity onPress={onPress} style={labelStyles.labelContainer} key={key} >
                        <Ionicons name={iconName} size={iconSize} color={iconColor} />
                        <Text style={labelStyles.label}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}