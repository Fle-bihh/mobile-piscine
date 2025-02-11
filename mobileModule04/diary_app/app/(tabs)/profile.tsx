import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/themed/ThemedView.component";
import { useAuthContext } from "@/contexts/auth.context";
import { useNotesContext } from "@/contexts/notes.context";
import Loader from "@/components/ui/Loader.component";
import { useEffect } from "react";
import NotesList from "@/components/notes/NotesList.component";
import Error from "@/components/ui/Error.component";
import routing from "@/functions/Routing.functions";
import { ERoutes } from "@/constants/Routes.constants";
import SystemButton from "@/components/buttons/SystemButton.component";

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
			{loading && <Loader />}
			{error && <Error error={error} />}
			<NotesList notes={notes} />
			<SystemButton
				title={ADD_TITLE}
				onPress={handleCreateNote}
				style={styles.buttonContainer}
			/>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	buttonContainer: {
		position: "absolute",
		bottom: 16,
		alignSelf: "center",
	},
});
