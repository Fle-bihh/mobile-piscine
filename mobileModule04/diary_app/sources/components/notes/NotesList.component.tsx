import { FlatList, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { INote } from "@/types/Notes.types";
import RenderNote from "./RenderNote.component";
import { ThemedText } from "@/components/themed/ThemedText.component";
import { useThemeColors, useThemeOpacity } from "@/hooks/useThemeColor.hook";
import { EPalette } from "@/constants/Colors.constants";

const TITLE = "All your notes";
const EMPTY_TEXT = "Click on the button down there to create your first note !";

interface NotesListProps {
	notes: INote[];
}
export default function NotesList({ notes }: NotesListProps) {
	const styles = useStyles();
	return (
		<FlatList
			contentContainerStyle={styles.contentContainer}
			data={notes}
			renderItem={({ item }) => <RenderNote item={item} />}
			ListHeaderComponent={() => <ThemedText style={styles.title}>{TITLE}</ThemedText>}
			stickyHeaderIndices={[0]}
			ListEmptyComponent={() => <ThemedText style={styles.empty}>{EMPTY_TEXT}</ThemedText>}
		/>
	);
}

function useStyles() {
	const backgroundColor = useThemeOpacity();
	const styles = StyleSheet.create({
		contentContainer: { gap: 16, padding: 16, paddingBottom: 96 },
		title: {
			fontSize: 20,
			fontWeight: "bold",
			backgroundColor,
			paddingVertical: 8,
		},
		empty: {
			fontSize: 16,
			textAlign: "center",
			color: EPalette.Information,
		},
	});
	return styles;
}
