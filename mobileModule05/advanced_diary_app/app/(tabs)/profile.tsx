import { StyleSheet } from "react-native";
import { useAuthContext } from "@/contexts/auth.context";
import { useNotesContext } from "@/contexts/notes.context";
import Loader from "@/components/ui/Loader.component";
import { useEffect } from "react";
import NotesList from "@/components/notes/NotesList.component";
import routing from "@/functions/Routing.functions";
import { ERoutes } from "@/constants/Routes.constants";
import SystemButton from "@/components/buttons/SystemButton.component";
import NotesSummary from "@/components/notes/NotesSummary.component";
import ProfileHeader from "@/components/profile/ProfileHeader.component";
import { ThemedScrollView } from "@/components/themed/ThemedScrollView.component";

const ADD_TITLE = "New note";
const LIST_TITLE = "Your last notes";
const EMPTY_LIST_TITLE = "Click on the button down there to create your first note !";

export default function ProfileView() {
	const { user } = useAuthContext();
	const { notes, fetchNotes, loading } = useNotesContext();

	useEffect(() => {
		if (user) {
			fetchNotes(user.uid);
		}
	}, [user]);

	const handleCreateNote = () => routing.push(ERoutes.CreateNote);

	return (
		<>
			<ThemedScrollView contentContainerStyle={styles.container}>
				<ProfileHeader />
				{loading && <Loader />}
				<NotesList
					notes={notes.slice(0, 2)}
					scrollEnabled={false}
					title={LIST_TITLE}
					emptyTitle={EMPTY_LIST_TITLE}
				/>
				<NotesSummary notes={notes} />
			</ThemedScrollView>
			<SystemButton
				title={ADD_TITLE}
				onPress={handleCreateNote}
				style={styles.buttonContainer}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
	buttonContainer: {
		position: "absolute",
		bottom: 16,
		alignSelf: "center",
	},
});
