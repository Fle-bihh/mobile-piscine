import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { ThemedView } from "@/components/themed/ThemedView.component";
import { layoutDefaultStyle } from "@/constants/Style.constants";
import { AuthProvider } from "@/contexts/auth.context";
import { NetworkProvider } from "@/contexts/network.context";
import { NotesProvider } from "@/contexts/notes.context";
import { ServicesProvider } from "@/contexts/services.context";
import { useColorScheme } from "@/hooks/useColorScheme.hook";
import { NativeStackNavigationOptions } from "@/types/ExpoRouter.types";
import ToastManager from "expo-react-native-toastify";

SplashScreen.preventAutoHideAsync();

const App = () => {
	return (
		<ThemedView style={{ flex: 1 }}>
			<ToastManager />
			<Stack screenOptions={{ ...(layoutDefaultStyle as NativeStackNavigationOptions) }}>
				<Stack.Screen name="(entry)" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen
					name="create-note"
					options={{ presentation: "modal", headerTitle: "Add a new note" }}
				/>
				<Stack.Screen name="+not-found" />
			</Stack>
		</ThemedView>
	);
};

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ServicesProvider>
			<NetworkProvider>
				<AuthProvider>
					<NotesProvider>
						<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
							<StatusBar style="auto" />
							<App />
						</ThemeProvider>
					</NotesProvider>
				</AuthProvider>
			</NetworkProvider>
		</ServicesProvider>
	);
}
