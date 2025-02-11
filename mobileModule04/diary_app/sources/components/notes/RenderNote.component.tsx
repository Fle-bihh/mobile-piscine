import { Button, ListRenderItemInfo, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { INote } from "@/types/Notes.types";
import { Collapsible } from "../ui/Collapsible.component";
import { ThemedText } from "../themed/ThemedText.component";
import { ThemedView } from "../themed/ThemedView.component";
import { useThemeColors } from "@/hooks/useThemeColor.hook";
import { Ionicons } from "@expo/vector-icons";
import FeelingIcon from "./FeelingIcon.component";
import { EPalette } from "@/constants/Colors.constants";
import SystemButton from "../buttons/SystemButton.component";
import { useNotesContext } from "@/contexts/notes.context";

interface RenderNoteProps {
	item: INote;
}
const RenderNote = ({ item }: RenderNoteProps) => {
	const { styles } = useStyles();
	const { deleteNote, loading } = useNotesContext();

	const handleDeleteNote = async () => {
		await deleteNote(item.id);
	};

	const NoteHeader = () => (
		<ThemedView style={styles.headerContainer}>
			<ThemedView style={styles.headerTopContainer}>
				<FeelingIcon feeling={item.feeling} />
				<ThemedText style={styles.date}>
					{new Date(item.date).toLocaleDateString()}
				</ThemedText>
			</ThemedView>
			<ThemedText style={styles.title}>{item.title}</ThemedText>
		</ThemedView>
	);

	return (
		<Collapsible
			contentContainerStyles={styles.contentContainer}
			style={styles.container}
			renderHeader={NoteHeader}
		>
			<ThemedText style={styles.content}>{item.content}</ThemedText>
			<SystemButton
				disabled={loading}
				title="Delete note"
				color={EPalette.Error}
				onPress={handleDeleteNote}
			/>
		</Collapsible>
	);
};

const useStyles = () => {
	const colors = useThemeColors();
	const { width } = useWindowDimensions();
	const styles = StyleSheet.create({
		container: {
			backgroundColor: colors.backgroundSecondary,
			borderRadius: 8,
			padding: 16,
			gap: 16,
		},
		contentContainer: {
			gap: 16,
		},
		headerContainer: {
			backgroundColor: "transparent",
			width: width - 32 - 32,
		},
		headerTopContainer: {
			display: "flex",
			backgroundColor: "transparent",
			flexDirection: "row",
			alignItems: "center",
			gap: 8,
		},
		title: {
			fontSize: 16,
			fontWeight: "700",
			backgroundColor: "transparent",
		},
		date: {
			fontSize: 12,
			color: colors.textSecondary,
			backgroundColor: "transparent",
		},
		content: {
			backgroundColor: "transparent",
		},
	});
	return { styles };
};

export default RenderNote;
