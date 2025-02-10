import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor.hook";

export default function TabLayout() {
	const tabBarActiveTintColor = useThemeColor("tabIconSelected");
	const tabBarInactiveTintColor = useThemeColor("tabIconDefault");

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor,
				tabBarInactiveTintColor,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: "Explore",
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="thumbs-down" color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
