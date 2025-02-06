import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
	const loaded = true;
	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: 'Calculator',
				}}
			/>
		</Stack>
	);
}
