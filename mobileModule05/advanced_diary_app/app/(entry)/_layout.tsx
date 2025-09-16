import React from "react";
import { Redirect, Stack } from "expo-router";
import { useAuthContext } from "@/contexts/auth.context";
import { getHrefFromRoute } from "@/functions/Routing.functions";
import { ERoutes } from "@/constants/Routes.constants";
import { layoutDefaultStyle } from "@/constants/Style.constants";
import { NativeStackNavigationOptions } from "@/types/ExpoRouter.types";

export default function EntryLayout() {
	const { user } = useAuthContext();

	if (user) return <Redirect href={getHrefFromRoute(ERoutes.Home)} />;
	return (
		<Stack
			screenOptions={{
				...(layoutDefaultStyle as NativeStackNavigationOptions),
			}}
		>
			<Stack.Screen name="index" options={{ title: "Welcome" }} />
			<Stack.Screen name="login" options={{ title: "Login" }} />
		</Stack>
	);
}
