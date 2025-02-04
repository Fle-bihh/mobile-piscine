import { TextInput, View } from "react-native";
import { getSearchBarStyles } from "./search-bar.styles";

export default function SearchBar() {
    const { styles, placeholderTextColor } = getSearchBarStyles();
    const placeholder = "Search here..."
    return (
        <View style={styles.container}>
            <TextInput placeholderTextColor={placeholderTextColor} style={styles.label} placeholder={placeholder} />
        </View>
    )
}