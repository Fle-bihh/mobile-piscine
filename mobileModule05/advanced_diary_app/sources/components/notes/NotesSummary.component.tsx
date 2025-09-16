import { getFeelingPercentage } from "@/functions/Notes.functions";
import { useThemeColor } from "@/hooks/useThemeColor.hook";
import { EFeeling, INote } from "@/types/Notes.types";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "../themed/ThemedText.component";
import { ThemedView } from "../themed/ThemedView.component";
import FeelingIcon from "./FeelingIcon.component";

interface NotesSummaryProps {
	notes: INote[];
}
export default function NotesSummary({ notes }: NotesSummaryProps) {
	const styles = useStyles();
	const title = useMemo(() => `Your feel for your ${notes.length} notes`, [notes]);
	const feelingsData: [EFeeling, number][] = useMemo(
		() => Object.values(EFeeling).map((feel) => [feel, getFeelingPercentage(feel, notes)]),
		[notes]
	);
	return (
		<ThemedView style={styles.container}>
			<ThemedText style={styles.title}>{title}</ThemedText>
			{feelingsData.map((data) => (
				<ThemedView key={data[0]} style={styles.line}>
					<FeelingIcon feeling={data[0]} />
					<ThemedText>{`${Math.round(data[1])}%`}</ThemedText>
				</ThemedView>
			))}
		</ThemedView>
	);
}

const useStyles = () => {
	const borderColor = useThemeColor("text");
	const styles = StyleSheet.create({
		container: {
			gap: 16,
			padding: 16,
			borderTopWidth: 1,
			borderTopColor: borderColor,
		},
		title: {
			fontSize: 20,
			fontWeight: "bold",
			paddingVertical: 8,
		},
		line: {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			gap: 16,
		},
	});
	return styles;
};
