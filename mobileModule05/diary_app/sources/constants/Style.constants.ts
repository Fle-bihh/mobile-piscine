import { NativeStackNavigationOptions } from "@/types/ExpoRouter.types";
import { EFonts } from "./Fonts.constants";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export const layoutDefaultStyle: NativeStackNavigationOptions & BottomTabNavigationOptions = {
	headerTitleStyle: {
		fontFamily: EFonts.Primary,
		fontWeight: "bold",
		fontSize: 24,
	},
	headerBackTitleStyle: {
		fontFamily: EFonts.Primary,
		fontSize: 20,
	},
};
