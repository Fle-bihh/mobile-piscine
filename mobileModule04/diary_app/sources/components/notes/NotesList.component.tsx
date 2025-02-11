import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { INote } from "@/types/Notes.types";
import RenderNote from "./RenderNote.component";

interface NotesListProps {
	notes: INote[];
}
export default function NotesList({ notes }: NotesListProps) {
	return (
		<FlatList
			contentContainerStyle={styles.contentContainer}
			data={notes}
			renderItem={({ item }) => <RenderNote item={item} />}
			keyExtractor={(item) => item.id}
		/>
	);
}

const styles = StyleSheet.create({
	contentContainer: { gap: 16, paddingVertical: 16 },
});
