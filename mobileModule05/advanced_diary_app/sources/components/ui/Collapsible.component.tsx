import { useThemeColors } from "@/hooks/useThemeColor.hook";
import { PropsWithChildren, ReactNode, useState } from "react";
import { StyleSheet, TouchableOpacity, ViewProps, ViewStyle } from "react-native";
import { ThemedView } from "../themed/ThemedView.component";
import { ThemedTouchableOpacity } from "../themed/ThemedTouchableOpacity.component";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "../themed/ThemedText.component";

interface CollapsibleProps extends PropsWithChildren, ViewProps {
	title?: string;
	renderHeader?: () => ReactNode;
	contentContainerStyles?: ViewStyle;
}
export function Collapsible({
	children,
	title,
	renderHeader,
	contentContainerStyles,
	...props
}: CollapsibleProps) {
	const [isOpen, setIsOpen] = useState(false);
	const colors = useThemeColors();

	const Header = () => (renderHeader ? renderHeader() : <ThemedText>{title}</ThemedText>);
	return (
		<ThemedView {...props}>
			<ThemedTouchableOpacity
				style={styles.heading}
				onPress={() => setIsOpen((value) => !value)}
				activeOpacity={0.8}
			>
				<Ionicons
					name="chevron-forward"
					size={18}
					weight="medium"
					color={colors.secondary}
					style={{ transform: [{ rotate: isOpen ? "90deg" : "0deg" }] }}
				/>

				<Header />
			</ThemedTouchableOpacity>
			{isOpen && (
				<ThemedView style={[styles.content, contentContainerStyles]}>{children}</ThemedView>
			)}
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	heading: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "transparent",
		gap: 6,
	},
	content: {
		backgroundColor: "transparent",
	},
});
