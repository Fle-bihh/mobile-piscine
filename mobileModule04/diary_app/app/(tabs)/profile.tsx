import { Button, FlatList, StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed/ThemedText.component";
import { ThemedView } from "@/components/themed/ThemedView.component";
import { useAuthContext } from "@/contexts/auth.context";
import { useNotesContext } from "@/contexts/notes.context";
import Loader from "@/components/ui/Loader.component";
import { EFeeling, INoteBase } from "@/types/Notes.types";
import { useEffect } from "react";
import NotesList from "@/components/notes/NotesList.component";
import Error from "@/components/ui/Error.component";
import { ThemedTouchableOpacity } from "@/components/themed/ThemedTouchableOpacity.component";
import routing from "@/functions/Routing.functions";
import { ERoutes } from "@/constants/Routes.constants";
import { EPalette } from "@/constants/Colors.constants";

const TITLE = "All your notes";
const ADD_TITLE = "New note";

export default function ProfileView() {
	const { user } = useAuthContext();
	const { notes, fetchNotes, loading, error } = useNotesContext();

	useEffect(() => {
		if (user) {
			fetchNotes(user.uid);
		}
	}, [user]);

	const handleCreateNote = () => routing.push(ERoutes.CreateNote);

	return (
		<ThemedView style={styles.container}>
			<ThemedText style={styles.title}>{TITLE}</ThemedText>
			{loading && <Loader />}
			{error && <Error error={error} />}
			<NotesList notes={notes} />
			<ThemedTouchableOpacity onPress={handleCreateNote} style={styles.buttonContainer}>
				<ThemedText style={styles.buttonTitle}>{ADD_TITLE}</ThemedText>
			</ThemedTouchableOpacity>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 20 },
	title: { fontSize: 20, fontWeight: "bold" },
	buttonContainer: {
		backgroundColor: EPalette.Primary,
		position: "absolute",
		bottom: 16,
		alignSelf: "center",
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 8,
	},
	buttonTitle: {},
});
