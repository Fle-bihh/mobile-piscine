import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { ThemedTouchableOpacity } from "../themed/ThemedTouchableOpacity.component";
import { useThemeColor, useThemeColors } from "@/hooks/useThemeColor.hook";
import { ThemedText } from "../themed/ThemedText.component";
import { EIcons } from "@/constants/Icons.constants";
import getIconName from "@/functions/Icons.functions";
import { TAuthProviders } from "@/constants/Auth.constants";
import { Ionicons } from "@expo/vector-icons";

interface LoginButtonProps {
	type: TAuthProviders;
	onPress: () => void;
}
export default function LoginButton({ onPress, type }: LoginButtonProps) {
	console.log("[LoginButton] - [render]");
	const { styles, iconColor, iconSize, iconName } = useLoginButtonStyles(type);

	const providerTitle = useMemo(() => {
		const providerName = type === "github" ? "GitHub" : "Google";
		return `Continue with ${providerName}`;
	}, [type]);

	return (
		<ThemedTouchableOpacity onPress={onPress} style={styles.container}>
			<Ionicons name={iconName} color={iconColor} size={iconSize} />
			<ThemedText>{providerTitle}</ThemedText>
		</ThemedTouchableOpacity>
	);
}

function useLoginButtonStyles(type: TAuthProviders) {
	const colors = useThemeColors();

	const iconSize = 24;
	const iconColor = colors.text;

	const iconName = useMemo(() => {
		console.log("[useLoginButtonStyles] - [iconName] - ", type);
		const providerIcon = type === "github" ? EIcons.Github : EIcons.Google;
		return getIconName(providerIcon);
	}, [type, getIconName]);

	const styles = StyleSheet.create({
		container: {
			backgroundColor: colors.backgroundSecondary,
			paddingHorizontal: 16,
			paddingVertical: 8,
			gap: 16,
			alignItems: "center",
			display: "flex",
			flexDirection: "row",
			borderRadius: 4,
		},
		title: {
			fontSize: iconSize,
			lineHeight: iconSize,
		},
	});

	return { styles, iconSize, iconColor, iconName };
}
