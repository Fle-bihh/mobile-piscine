import { EPalette } from "@/constants/colors.constants";
import {
	ActivityIndicator,
	ColorValue,
	StyleProp,
	ViewStyle,
} from "react-native";

interface LoaderProps {
	animating?: boolean | undefined;
	color?: ColorValue | undefined;
	hidesWhenStopped?: boolean | undefined;
	size?: number | "small" | "large" | undefined;
	style?: StyleProp<ViewStyle> | undefined;
}
export default function Loader(props: LoaderProps) {
	return <ActivityIndicator color={EPalette.Primary} {...props} />;
}
