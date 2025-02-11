import { Redirect, router, Tabs } from "expo-router";
import React, { useEffect, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor.hook";
import { useAuthContext } from "@/contexts/auth.context";
import routing, { getHrefFromRoute } from "@/functions/Routing.functions";
import { ERoutes } from "@/constants/Routes.constants";

export default function TabLayout() {
	const { user } = useAuthContext();
	const tabBarActiveTintColor = useThemeColor("tabIconSelected");
	const tabBarInactiveTintColor = useThemeColor("tabIconDefault");

	if (!user) return <Redirect href={getHrefFromRoute(ERoutes.Entry)} />;
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
