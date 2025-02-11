import React, { useEffect, useLayoutEffect } from "react";
import { Redirect, Stack } from "expo-router";
import { useAuthContext } from "@/contexts/auth.context";
import routing, { getHrefFromRoute } from "@/functions/Routing.functions";
import { ERoutes } from "@/constants/Routes.constants";

export default function EntryLayout() {
	const { user } = useAuthContext();

	if (user) return <Redirect href={getHrefFromRoute(ERoutes.Home)} />;
	return <Stack />;
}
