import { View } from "react-native";
import { getAppBarStyles } from "./app-bar.styles";
import SearchBar from "../search-bar/search-bar.component";
import PositionButton from "../position-button/position-button.component";

export default function AppBar() {
	const styles = getAppBarStyles();

	return (
		<View style={styles.container}>
			<SearchBar />
			<PositionButton />
		</View>
	);
}
