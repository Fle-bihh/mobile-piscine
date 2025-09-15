import useScreenOrientation, { EScreenOrientation } from "@/hooks/screen-orientation.hook";
import { useMemo } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

export default function useCardSliderStyles() {
	const { width } = useWindowDimensions();
	const { orientation } = useScreenOrientation();

	const padding = useMemo(() => {
		if (orientation === EScreenOrientation.Portrait) {
			return 16;
		} else if (orientation === EScreenOrientation.Landscape) {
			return 64;
		}
		return 16;
	}, [width, orientation]);

	const containerWidth = useMemo(() => width, [width, padding]);

	const styles = StyleSheet.create({
		container: {
			width: containerWidth,
			paddingHorizontal: padding,
		},
		contentContainer: {
			alignItems: "flex-start",
			gap: 12,
		},
	});
	return { styles };
}
