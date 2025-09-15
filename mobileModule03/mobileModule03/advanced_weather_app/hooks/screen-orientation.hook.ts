import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";

export enum EScreenOrientation {
	Portrait = "portrait",
	Landscape = "landscape",
}

export default function useScreenOrientation() {
	const [orientation, setOrientation] = useState<EScreenOrientation>(EScreenOrientation.Portrait);

	const isLandscape = (o: ScreenOrientation.Orientation) =>
		o === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
		o === ScreenOrientation.Orientation.LANDSCAPE_RIGHT;

	const isPortrait = (o: ScreenOrientation.Orientation) =>
		o === ScreenOrientation.Orientation.PORTRAIT_UP ||
		o === ScreenOrientation.Orientation.PORTRAIT_DOWN;

	useEffect(() => {
		const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
			if (event.orientationInfo.orientation) {
				const o = event.orientationInfo.orientation;
				if (isLandscape(o)) {
					setOrientation(EScreenOrientation.Landscape);
				} else if (isPortrait(o)) {
					setOrientation(EScreenOrientation.Portrait);
				}
			}
		});
		return () => {
			subscription.remove();
		};
	}, []);

	return { orientation };
}
