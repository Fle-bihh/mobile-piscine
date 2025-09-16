import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/themed/ThemedView.component";
import { useNotesContext } from "@/contexts/notes.context";
import { useMemo, useState } from "react";
import Calendar from "@/components/calendar/Calendar.component";
import NotesList from "@/components/notes/NotesList.component";
import { isSameDay } from "@/functions/Date.functions";

const EMPTY_LIST_TITLE = "No notes for this date";

export default function CalendarView() {
	const { styles } = useStyles();
	const { notes } = useNotesContext();

	const [date, setDate] = useState<number>(Date.now());

	const dateNotes = useMemo(() => notes.filter((n) => isSameDay(n.date, date)), [date, notes]);

	const listTitle = useMemo(() => new Date(date).toDateString(), [date]);

	return (
		<ThemedView style={styles.container}>
			<Calendar value={date} onChange={setDate} />
			<NotesList notes={dateNotes} title={listTitle} emptyTitle={EMPTY_LIST_TITLE} />
		</ThemedView>
	);
}

const useStyles = () => {
	const styles = StyleSheet.create({
		container: { flex: 1 },
		title: { fontSize: 20, fontWeight: "bold" },
	});
	return { styles };
};
