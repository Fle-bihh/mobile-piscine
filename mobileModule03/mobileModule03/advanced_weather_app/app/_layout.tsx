import { ErrorProvider } from "@/contexts/error.context";
import { PositionProvider } from "@/contexts/position.context";
import { ServicesProvider } from "@/contexts/services.context";
import { WeatherProvider } from "@/contexts/weather.context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

function App() {
	return (
		<>
			<StatusBar style="light" />
			<Stack>
				<Stack.Screen
					name="(tabs)"
					options={{
						headerShown: false,
					}}
				/>
			</Stack>
		</>
	);
}

export default function RootLayout() {
	return (
		<ServicesProvider>
			<ErrorProvider>
				<WeatherProvider>
					<PositionProvider>
						<App />
					</PositionProvider>
				</WeatherProvider>
			</ErrorProvider>
		</ServicesProvider>
	);
}
