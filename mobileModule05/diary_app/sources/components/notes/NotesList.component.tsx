import { FlatList, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { INote } from "@/types/Notes.types";
import RenderNote from "./RenderNote.component";
import { ThemedText } from "@/components/themed/ThemedText.component";
import { useThemeColor, useThemeColors, useThemeOpacity } from "@/hooks/useThemeColor.hook";
import { EPalette } from "@/constants/Colors.constants";
import { ThemedView } from "../themed/ThemedView.component";

const TITLE = "All your notes";
const EMPTY_TITLE = "No notes to display...";

interface NotesListProps {
	notes: INote[];
	scrollEnabled?: boolean;
	title?: string;
	emptyTitle?: string;
}
export default function NotesList({
	notes,
	scrollEnabled = true,
	title = TITLE,
	emptyTitle = EMPTY_TITLE,
}: NotesListProps) {
	const styles = useStyles();
	return (
		<ThemedView style={{ ...(scrollEnabled ? { flex: 1 } : {}) }}>
			<FlatList
				scrollEnabled={scrollEnabled}
				contentContainerStyle={styles.contentContainer}
				data={notes}
				renderItem={({ item }) => <RenderNote item={item} />}
				ListHeaderComponent={() => <ThemedText style={styles.title}>{title}</ThemedText>}
				stickyHeaderIndices={[0]}
				ListEmptyComponent={() => (
					<ThemedText style={styles.empty}>{emptyTitle}</ThemedText>
				)}
			/>
		</ThemedView>
	);
}

function useStyles() {
	const borderColor = useThemeColor("text");
	const backgroundColor = useThemeOpacity();
	const styles = StyleSheet.create({
		contentContainer: {
			gap: 16,
			padding: 16,
			paddingBottom: 16,
			borderTopWidth: 1,
			borderTopColor: borderColor,
		},
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
