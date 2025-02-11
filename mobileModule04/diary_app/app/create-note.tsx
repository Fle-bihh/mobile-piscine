import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Redirect } from "expo-router";
import { useAuthContext } from "@/contexts/auth.context";
import { useNotesContext } from "@/contexts/notes.context";
import { INoteBase, EFeeling } from "@/types/Notes.types";
import { ThemedView } from "@/components/themed/ThemedView.component";
import { ThemedText } from "@/components/themed/ThemedText.component";
import { Picker } from "@react-native-picker/picker";
import { ThemedTextInput } from "@/components/themed/ThemedTextInput.component";
import routing, { getHrefFromRoute } from "@/functions/Routing.functions";
import Error from "@/components/ui/Error.component";
import SystemButton from "@/components/buttons/SystemButton.component";
import { ERoutes } from "@/constants/Routes.constants";
import { FeelingsLabels } from "@/constants/Feelings.constants";

export default function CreateNoteView() {
	const { user } = useAuthContext();
	const { createNote, loading, error: serviceError } = useNotesContext();

	const [error, setError] = useState(serviceError);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [feeling, setFeeling] = useState<EFeeling>(EFeeling.Neutral);

	const handleCreateNote = async () => {
		if (!user) return;
		if (!title.trim() || !content.trim() || !feeling) {
			setError("Please fill all the fields to create the note.");
			return;
		}

		const newNote: INoteBase = {
			userId: user.uid,
			date: Date.now(),
			title,
			feeling,
			content,
		};

		await createNote(newNote);
		routing.back();
	};

	if (!routing.canGoBack()) return <Redirect href={getHrefFromRoute(ERoutes.Home)} />;
	return (
		<ThemedView style={styles.container}>
			<ThemedText style={styles.title}>Create Note</ThemedText>

			<View style={styles.inputContainer}>
				<ThemedText style={styles.label}>Title</ThemedText>
				<ThemedTextInput
					value={title}
					onChangeText={setTitle}
					placeholder="Enter title"
					style={styles.input}
				/>
			</View>

			<View style={styles.inputContainer}>
				<ThemedText style={styles.label}>Content</ThemedText>
				<ThemedTextInput
					value={content}
					onChangeText={setContent}
					placeholder="Enter content"
					multiline
					style={[styles.input, styles.textArea]}
				/>
			</View>

			<View style={styles.inputContainer}>
				<ThemedText style={styles.label}>Feeling</ThemedText>
				<Picker
					selectedValue={feeling}
					onValueChange={(itemValue) => setFeeling(itemValue)}
					style={styles.picker}
				>
					{Object.values(EFeeling).map((feeling) => (
						<Picker.Item
							key={feeling}
							label={FeelingsLabels[feeling]}
							value={feeling}
						/>
					))}
				</Picker>
			</View>

			<SystemButton title="Save Note" onPress={handleCreateNote} disabled={loading} />
			{error && <Error error={error} />}
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: { padding: 20, gap: 16 },
	title: { fontSize: 24 },
	inputContainer: { gap: 5 }, // Small gap between title and input
	label: { fontSize: 16, fontWeight: "500" }, // Style for the label
	input: { borderWidth: 1, padding: 10, borderRadius: 5 },
	textArea: { height: 100, textAlignVertical: "top" },
	picker: {},
});
