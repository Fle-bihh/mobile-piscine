import SystemButton from "@/components/buttons/SystemButton.component";
import { ThemedScrollView } from "@/components/themed/ThemedScrollView.component";
import { ThemedText } from "@/components/themed/ThemedText.component";
import { ThemedTextInput } from "@/components/themed/ThemedTextInput.component";
import Error from "@/components/ui/Error.component";
import Input from "@/components/ui/Input.component";
import { FeelingsLabels } from "@/constants/Feelings.constants";
import { ERoutes } from "@/constants/Routes.constants";
import { useAuthContext } from "@/contexts/auth.context";
import { useNotesContext } from "@/contexts/notes.context";
import { validateNote } from "@/functions/Notes.functions";
import routing, { getHrefFromRoute } from "@/functions/Routing.functions";
import { useThemeColor } from "@/hooks/useThemeColor.hook";
import { EFeeling, INoteBase } from "@/types/Notes.types";
import { Picker } from "@react-native-picker/picker";
import { Redirect } from "expo-router";
import { useMemo, useState } from "react";
import { Keyboard, Platform, StyleSheet, TouchableWithoutFeedback } from "react-native";

export default function CreateNoteView() {
	const { user } = useAuthContext();
	const { createNote, loading } = useNotesContext();

	const [error, setError] = useState("");

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [feeling, setFeeling] = useState<EFeeling>(EFeeling.Neutral);

	const styles = useStyles();

	const handleCreateNote = async () => {
		if (!user) return;

		const errorMessage = validateNote(title, content, feeling);
		if (errorMessage) {
			setError(errorMessage);
			return;
		}

		const newNote: INoteBase = {
			userId: user.uid,
			date: Date.now(),
			title: title.trim(),
			feeling,
			content: content.trim(),
			...(user.email ? { email: user.email } : {}),
		};

		await createNote(newNote);
		routing.back();
	};

	const InputView = useMemo(
		() => (
			<ThemedScrollView contentContainerStyle={styles.container}>
				<ThemedText style={styles.title}>Create Note</ThemedText>

				<Input title="Title:">
					<ThemedTextInput
						value={title}
						onChangeText={setTitle}
						placeholder="Enter title"
						style={styles.input}
					/>
				</Input>

				<Input title="Content:">
					<ThemedTextInput
						value={content}
						onChangeText={setContent}
						placeholder="Enter content"
						multiline
						style={[styles.input, styles.textArea]}
					/>
				</Input>

				<Input title="Feeling:">
					<Picker
						selectedValue={feeling}
						onValueChange={(itemValue) => setFeeling(itemValue)}
						style={styles.picker}
					>
						<Picker.Item
							key={"default"}
							label="How are you feeling ?"
							value={"default"}
						/>
						{Object.values(EFeeling).map((feeling) => (
							<Picker.Item
								key={feeling}
								label={FeelingsLabels[feeling]}
								value={feeling}
							/>
						))}
					</Picker>
				</Input>

				<SystemButton title="Save Note" onPress={handleCreateNote} disabled={loading} />
				{error && <Error error={error} />}
			</ThemedScrollView>
		),
		[title, content, feeling, error, loading]
	);

	if (!routing.canGoBack()) return <Redirect href={getHrefFromRoute(ERoutes.Home)} />;
	if (Platform.OS === "web") return InputView;
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			{InputView}
		</TouchableWithoutFeedback>
	);
}

const useStyles = () => {
	const borderColor = useThemeColor("text");
	const styles = StyleSheet.create({
		container: { padding: 20, gap: 16, flex: 1 },
		title: { fontSize: 24 },
		inputContainer: { gap: 5 },
		label: { fontSize: 16, fontWeight: "500" },
		input: { borderWidth: 1, padding: 10, borderRadius: 5, borderColor },
		textArea: { height: 100, textAlignVertical: "top" },
		picker: {},
	});
	return styles;
};
