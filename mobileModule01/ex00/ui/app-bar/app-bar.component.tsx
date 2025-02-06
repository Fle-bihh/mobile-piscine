import { Text, View } from "react-native";
import { getAppBarStyles } from "./app-bar.styles";
import SearchBar from "../search-bar/search-bar.component";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EAppIcons } from "@/constants/icons.constants";
import { getAppIconName } from "@/functions/icons.functions";

export default function AppBar() {
    const styles = getAppBarStyles();
    const iconName = getAppIconName(EAppIcons.Geoloca);
    const iconSize = 24
    return (
        <View style={styles.container}>
            <SearchBar />
            <Ionicons name={iconName} size={iconSize} />
        </View>
    )
}