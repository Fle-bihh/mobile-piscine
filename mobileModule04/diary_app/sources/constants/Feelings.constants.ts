import { EFeeling } from "@/types/Notes.types";

export const FeelingsLabels: Record<EFeeling, string> = {
	[EFeeling.Satisfied]: "Satisfied",
	[EFeeling.Happy]: "Happy",
	[EFeeling.Neutral]: "Neutral",
	[EFeeling.Frustrated]: "Frustrated",
	[EFeeling.Stressed]: "Stressed",
	[EFeeling.Excited]: "Excited",
};

export const FeelingsEmojis: Record<EFeeling, string> = {
	[EFeeling.Satisfied]: "😌",
	[EFeeling.Happy]: "😁",
	[EFeeling.Neutral]: "😶",
	[EFeeling.Frustrated]: "😤",
	[EFeeling.Stressed]: "🥵",
	[EFeeling.Excited]: "🤩",
};
