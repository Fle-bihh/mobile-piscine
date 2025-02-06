import { FlatList, ListRenderItem } from "react-native";
import React from "react";
import useCardSliderStyles from "./card-slider.styles";

interface CardSliderProps<T> {
	cardComponent: ListRenderItem<T>;
	data: T[];
}
export default function CardSlider<T>({ cardComponent, data }: CardSliderProps<T>) {
	const { styles } = useCardSliderStyles();

	return (
		<FlatList<T>
			renderItem={cardComponent}
			data={data}
			horizontal
			style={styles.container}
			contentContainerStyle={styles.contentContainer}
			showsHorizontalScrollIndicator={false}
		/>
	);
}
