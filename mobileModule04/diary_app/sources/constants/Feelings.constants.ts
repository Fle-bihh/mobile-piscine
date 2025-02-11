import { TIonicon } from "@/types/Ionicons.types";
import { EFeeling } from "@/types/Notes.types";

export const FeelingsIcons: Record<EFeeling, TIonicon> = {
	[EFeeling.Satisfied]: "happy-outline",
	[EFeeling.Happy]: "happy",
	[EFeeling.Neutral]: "remove-circle-outline",
	[EFeeling.Frustrated]: "sad-outline",
	[EFeeling.Stressed]: "alert-circle-outline",
	[EFeeling.Excited]: "rocket-outline",
};

export const FeelingsColors: Record<EFeeling, string> = {
	[EFeeling.Satisfied]: "#4CAF50",
	[EFeeling.Happy]: "#FFD700",
	[EFeeling.Neutral]: "#9E9E9E",
	[EFeeling.Frustrated]: "#FF9800",
	[EFeeling.Stressed]: "#F44336",
	[EFeeling.Excited]: "#673AB7",
};

export const FeelingsLabels: Record<EFeeling, string> = {
	[EFeeling.Satisfied]: "Satisfied",
	[EFeeling.Happy]: "Happy",
	[EFeeling.Neutral]: "Neutral",
	[EFeeling.Frustrated]: "Frustrated",
	[EFeeling.Stressed]: "Stressed",
	[EFeeling.Excited]: "Excited",
};
