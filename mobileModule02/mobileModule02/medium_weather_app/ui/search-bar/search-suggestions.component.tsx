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
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.item} onPress={() => onPressItem(item)}>
						<Text style={styles.text}>
							{item.name} - {item.region} - {item.country}
						</Text>
					</TouchableOpacity>
				)}
				ListEmptyComponent={() => (
					<View style={styles.item}>
						<Text style={styles.text}>
							Couldn't find any result for the supplied search input...
						</Text>
					</View>
				)}
			/>
		</View>
	);
}
