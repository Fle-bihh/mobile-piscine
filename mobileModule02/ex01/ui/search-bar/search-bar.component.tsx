import { usePositionContext } from "@/contexts/position.context";
import { useEffect, useState } from "react";
import { View } from "react-native";
import SearchInput from "./search-input.component";
import getSearchBarStyles from "./search-bar.styles";
import SearchSuggestions from "./search-suggestions.component";
import { CitySuggestion } from "@/types/weather.types";
import { useWeatherContext } from "@/contexts/weather.context";

export default function SearchBar() {
	const { setCustomPosition } = usePositionContext();
	const { citySuggestions, searchCities, clearSuggestions, loading } =
		useWeatherContext();
	const { styles } = getSearchBarStyles();

	const [input, setInput] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(false);

	function cleanSearchBar() {
		clearSuggestions();
		setShowSuggestions(false);
		setInput("");
	}

	function onSubmitEditing() {
		if (citySuggestions.length > 0) {
			setCustomPosition(citySuggestions[0]);
		}
		cleanSearchBar();
	}

	function onPressSuggestion(suggestion: CitySuggestion) {
		setCustomPosition(suggestion);
		cleanSearchBar();
	}

	useEffect(() => {
		if (input.trim().length < 2) {
			setShowSuggestions(false);
			return;
		}

		const debounceTimeout = setTimeout(() => {
			searchCities(input);
			setShowSuggestions(true);
		}, 300);

		return () => clearTimeout(debounceTimeout);
	}, [input, searchCities]);

	return (
		<View style={styles.container}>
			<SearchInput
				loading={loading}
				value={input}
				onChangeText={setInput}
				onSubmitEditing={onSubmitEditing}
			/>
			<SearchSuggestions
				isVisible={showSuggestions}
				suggestions={citySuggestions}
				onPressItem={onPressSuggestion}
			/>
		</View>
	);
}
