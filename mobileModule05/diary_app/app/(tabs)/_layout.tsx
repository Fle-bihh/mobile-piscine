import { Redirect, router, Tabs } from "expo-router";
import React, { useEffect, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor.hook";
import { useAuthContext } from "@/contexts/auth.context";
import routing, { getHrefFromRoute } from "@/functions/Routing.functions";
import { ERoutes } from "@/constants/Routes.constants";
import { layoutDefaultStyle } from "@/constants/Style.constants";
import { EFonts } from "@/constants/Fonts.constants";

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
				...layoutDefaultStyle,
			}}
		>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color }) => <Ionicons size={28} name="happy" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="calendar"
				options={{
					title: "Calendar",
					tabBarIcon: ({ color }) => <Ionicons size={28} name="calendar" color={color} />,
				}}
			/>
		</Tabs>
	);
}
