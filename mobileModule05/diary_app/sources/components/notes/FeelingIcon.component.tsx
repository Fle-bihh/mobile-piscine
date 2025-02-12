import React from "react";
import { EFeeling } from "@/types/Notes.types";
import { FeelingsEmojis } from "@/constants/Feelings.constants";
import { ThemedText } from "../themed/ThemedText.component";

interface FeelingIconProps {
	feeling: EFeeling;
	size?: number;
}

export default function FeelingIcon({ feeling, size = 24 }: FeelingIconProps) {
	return <ThemedText style={{ fontSize: size }}>{FeelingsEmojis[feeling]}</ThemedText>;
}
