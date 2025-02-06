import { TextInput, View } from "react-native";
import { getSearchBarStyles } from "./search-bar.styles";
import { usePositionContext } from "@/contexts/position.context";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchBar() {
	const { setCustomPosition } = usePositionContext();

	const [input, setInput] = useState("");

	const {
		styles,
		placeholderTextColor,
		iconColor,
		iconName,
		iconSize,
	} = getSearchBarStyles();

	const placeholder = "Search location...";

	function onSubmitEditing() {
		setCustomPosition(input);
		setInput("");
	}

	return (
		<View style={styles.container}>
			<Ionicons
				name={iconName}
				size={iconSize}
				color={iconColor}
			/>
			<TextInput
				placeholderTextColor={placeholderTextColor}
				style={styles.label}
				placeholder={placeholder}
				autoComplete={"off"}
				autoCorrect={false}
				autoCapitalize="sentences"
				value={input}
				maxLength={20}
				onChangeText={setInput}
				onSubmitEditing={onSubmitEditing}
			/>
		</View>
	);
}
