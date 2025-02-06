import getSearchInputStyles from "./search-input.styles";
import {
	ActivityIndicator,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Loader from "../loader/loader.component";

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
	const {
		styles,
		placeholderTextColor,
		iconColor,
		searchIcon,
		crossIcon,
		iconSize,
	} = getSearchInputStyles();

	const placeholder = "Search location...";

	const clearInput = () => onChangeText("");

	const LeftIcon = () =>
		loading ? (
			<Loader size={iconSize} />
		) : (
			<Ionicons name={searchIcon} size={iconSize} color={iconColor} />
		);

	const RightIcon = () => {
		if (value.length > 0)
			return (
				<TouchableOpacity onPress={clearInput}>
					<Ionicons
						name={crossIcon}
						size={iconSize}
						color={iconColor}
					/>
				</TouchableOpacity>
			);
	};
	return (
		<View style={styles.container}>
			<LeftIcon />
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
			{<RightIcon />}
		</View>
	);
}
