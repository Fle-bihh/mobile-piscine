import { Ionicons } from "@expo/vector-icons";
import React, { useMemo } from "react";
import { EFeeling } from "@/types/Notes.types";
import { FeelingsColors, FeelingsIcons } from "@/constants/Feelings.constants";

interface FeelingIconProps {
	feeling: EFeeling;
	size?: number;
}

export default function FeelingIcon({ feeling, size = 24 }: FeelingIconProps) {
	const iconName = useMemo(() => FeelingsIcons[feeling], [feeling]);
	const iconColor = useMemo(() => FeelingsColors[feeling], [feeling]);
	return <Ionicons name={iconName} size={size} color={iconColor} />;
}
