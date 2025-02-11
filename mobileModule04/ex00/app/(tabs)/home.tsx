import { Button, FlatList, StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed/ThemedText.component";
import { ThemedView } from "@/components/themed/ThemedView.component";
import { useAuthContext } from "@/contexts/auth.context";
import { useNotesContext } from "@/contexts/notes.context";
import Loader from "@/components/ui/Loader.component";
import { EFeeling, INoteBase } from "@/types/Notes.types";
import { useEffect } from "react";
import { EPalette } from "@/constants/Colors.constants";

export default function HomeView() {
	const { user } = useAuthContext();
	const { notes, fetchNotes, createNote, loading, error } = useNotesContext();

	useEffect(() => {
		if (user && user.email) {
			fetchNotes(user.email);
		}
	}, [user]);

	const handleCreateNote = async () => {
		if (!user) return;

		const newNote: INoteBase = {
			userEmail: user.email ?? "",
			date: Date.now(),
			title: "Test Note",
			feeling: EFeeling.Excited,
			content: "This is a test note created for testing purposes!",
		};

		await createNote(newNote);
	};

	return (
		<ThemedView style={{ flex: 1, padding: 20 }}>
			<ThemedText style={{ fontSize: 20, fontWeight: "bold" }}>Notes Test Page</ThemedText>
			{loading && <Loader />}
			{error && <ThemedText style={{ color: "red" }}>Error: {error}</ThemedText>}
			<Button title="Create Test Note" onPress={handleCreateNote} disabled={loading} />
			<FlatList
				data={notes}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<ThemedView
						style={{
							padding: 10,
							marginVertical: 5,
							backgroundColor: EPalette.BlackSecondary,
							borderRadius: 5,
						}}
					>
						<ThemedText style={{ fontWeight: "bold" }}>{item.title}</ThemedText>
						<ThemedText>{item.content}</ThemedText>
						<ThemedText>Feeling: {item.feeling}</ThemedText>
						<ThemedText style={{ fontSize: 12, color: "gray" }}>
							{new Date(item.date).toLocaleString()}
						</ThemedText>
					</ThemedView>
				)}
			/>
		</ThemedView>
	);
}
