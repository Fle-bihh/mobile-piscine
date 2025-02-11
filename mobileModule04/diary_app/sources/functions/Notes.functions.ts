import { EFeeling } from "@/types/Notes.types";

export const validateNote = (
	title: string,
	content: string,
	feeling: EFeeling | null
): string | null => {
	const trimmedTitle = title.trim();
	const trimmedContent = content.trim();

	if (!trimmedTitle || !trimmedContent || !feeling) {
		return "All fields are required. Please fill in the title, content, and select a feeling.";
	}

	if (trimmedTitle.length > 20) {
		return `Title is too long (${trimmedTitle.length}). Please keep it under 20 characters.`;
	}

	if (trimmedContent.length > 150) {
		return `Content is too long (${trimmedContent.length}). Please keep it under 150 characters.`;
	}

	if (!Object.values(EFeeling).includes(feeling)) {
		return "Invalid feeling selection. Please choose a valid feeling.";
	}

	return null;
};
