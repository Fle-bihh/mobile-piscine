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
			return "/(tabs)/profile";
		case ERoutes.CreateNote:
			return "/create-note";
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

function back() {
	router.canGoBack() && router.back();
}

function canGoBack() {
	return router.canGoBack();
}

const routing = { push, replace, back, canGoBack };
export default routing;
