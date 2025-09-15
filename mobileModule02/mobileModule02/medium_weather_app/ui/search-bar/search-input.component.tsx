import getSearchInputStyles from "./search-input.styles";
import { ActivityIndicator, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SearchInputProps {
	value: string;
	onChangeText: (value: string) => void;
	onSubmitEditing: () => void;
	loading?: boolean;
}
export default function SearchInput({
	value,
	onChangeText,
	onSubmitEditing,
	loading,
}: SearchInputProps) {
	const { styles, placeholderTextColor, iconColor, iconName, iconSize } =
		getSearchInputStyles();

	const placeholder = "Search location...";

	const LeftIcon = () => (
		<Ionicons name={iconName} size={iconSize} color={iconColor} />
	);
	return (
		<View style={styles.container}>
			{loading ? <ActivityIndicator size={iconSize} /> : <LeftIcon />}
			<TextInput
				placeholderTextColor={placeholderTextColor}
				style={styles.label}
				placeholder={placeholder}
				autoComplete={"off"}
				autoCorrect={false}
				autoCapitalize="sentences"
				value={value}
				maxLength={20}
				onChangeText={onChangeText}
				onSubmitEditing={onSubmitEditing}
				returnKeyLabel="Enter"
				returnKeyType="search"
			/>
		</View>
	);
}
