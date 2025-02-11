import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme.hook";
import { ServicesProvider } from "@/contexts/services.context";
import { AuthProvider, useAuthContext } from "@/contexts/auth.context";
import { ThemedView } from "@/components/themed/ThemedView.component";
import { ThemedText } from "@/components/themed/ThemedText.component";
import { ThemedSafeAreaView } from "@/components/themed/ThemedSafeAreaView.component";
import { NotesProvider } from "@/contexts/notes.context";

SplashScreen.preventAutoHideAsync();

const App = () => {
	const { user } = useAuthContext();
	return (
		<ThemedSafeAreaView style={{ flex: 1 }}>
			<ThemedView>
				<ThemedText>{`Authentified: ${!!user}${
					user ? ` | ${user.displayName}` : ""
				}`}</ThemedText>
			</ThemedView>

			<Stack>
				<Stack.Screen name="(entry)" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen
					name="create-note"
					options={{ presentation: "modal", headerTitle: "Add a new note" }}
				/>
				<Stack.Screen name="+not-found" />
			</Stack>
		</ThemedSafeAreaView>
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
			<AuthProvider>
				<NotesProvider>
					<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
						<StatusBar style="auto" />
						<App />
					</ThemeProvider>
				</NotesProvider>
			</AuthProvider>
		</ServicesProvider>
	);
}
