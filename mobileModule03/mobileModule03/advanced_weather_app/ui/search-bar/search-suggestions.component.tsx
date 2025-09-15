import React from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import useSearchSuggestionsStyles from "./search-suggestions.styles";
import { CitySuggestion } from "@/types/weather.types";

interface SearchSuggestionsProps {
	isVisible: boolean;
	suggestions: CitySuggestion[];
	onPressItem: (suggestion: CitySuggestion) => void;
}

export default function SearchSuggestions({
	isVisible,
	suggestions,
	onPressItem,
}: SearchSuggestionsProps) {
	const { styles } = useSearchSuggestionsStyles();

	if (!isVisible) return null;

	return (
		<View style={styles.container}>
			<FlatList
				data={suggestions}
				keyExtractor={(item, index) => `${item.name}-${index}`}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						style={[styles.item, index + 1 === suggestions.length && styles.itemLast]}
						onPress={() => onPressItem(item)}
					>
						<Text style={styles.text}>
							<Text style={styles.mainText}>{item.name}</Text> - {item.region} -{" "}
							{item.country}
						</Text>
					</TouchableOpacity>
				)}
				ListEmptyComponent={() => (
					<View style={[styles.item, styles.itemLast]}>
						<Text style={styles.text}>No results for this input ...</Text>
					</View>
				)}
			/>
		</View>
	);
}
