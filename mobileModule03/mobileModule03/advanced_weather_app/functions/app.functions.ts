import { Platform } from "react-native";

export function platformIsWeb() {
	return Platform.OS === "web";
}
