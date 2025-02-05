import { StyleSheet } from "react-native";
import { EPalette } from "@/constants/colors.constants";

export default function getTodayWeatherStyles() {
	const styles = StyleSheet.create({
		text: { color: EPalette.TextPrimary },
	});
	return { styles };
}
