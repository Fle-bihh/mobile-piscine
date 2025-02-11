/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/Colors.constants";
import { useColorScheme } from "@/hooks/useColorScheme.hook";

export function useThemeOpacity(opacity: number = 0.5) {
	const theme = useColorScheme() ?? "light";
	return theme === "dark" ? `rgba(0,0,0,${opacity})` : `rgba(255,255,255,${opacity})`;
}
export function useThemeColors() {
	const theme = useColorScheme() ?? "light";

	return Colors[theme];
}
export function useThemeColor(colorName: keyof typeof Colors.light & keyof typeof Colors.dark) {
	const theme = useColorScheme() ?? "light";

	return Colors[theme][colorName];
}
