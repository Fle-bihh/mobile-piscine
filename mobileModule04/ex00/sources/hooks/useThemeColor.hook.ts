/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/Colors.constants";
import { useColorScheme } from "@/hooks/useColorScheme.hook";

export function useThemeColors() {
	const theme = useColorScheme() ?? "light";

	return Colors[theme];
}
export function useThemeColor(colorName: keyof typeof Colors.light & keyof typeof Colors.dark) {
	const theme = useColorScheme() ?? "light";

	return Colors[theme][colorName];
}
