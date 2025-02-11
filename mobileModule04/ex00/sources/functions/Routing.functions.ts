import { ERoutes } from "@/constants/Routes.constants";
import { Href, router } from "expo-router";
import { NavigationOptions } from "expo-router/build/global-state/routing";

export function getHrefFromRoute(route: ERoutes): Href {
	switch (route) {
		case ERoutes.Entry:
			return "/";
		case ERoutes.Login:
			return "/login";
		case ERoutes.Home:
			return "/(tabs)/home";
		default:
			return "/";
	}
}

function push(route: ERoutes, options?: NavigationOptions) {
	const href = getHrefFromRoute(route);
	router.push(href, options);
}

function replace(route: ERoutes, options?: NavigationOptions) {
	const href = getHrefFromRoute(route);
	router.replace(href, options);
}

const routing = { push, replace };
export default routing;
