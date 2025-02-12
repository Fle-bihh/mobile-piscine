import { StyleSheet } from "react-native";
import { Calendar as RNCalendar } from "react-native-calendars";
import React, { useMemo } from "react";
import { useThemeColors } from "@/hooks/useThemeColor.hook";
import { Theme } from "react-native-calendars/src/types";
import { EFonts } from "@/constants/Fonts.constants";

interface CalendarProps {
	value: number;
	onChange: (timestamp: number) => void;
}

export default function Calendar({ value, onChange }: CalendarProps) {
	const { calendarTheme } = useStyles();

	const selectedDateString = useMemo(() => new Date(value).toISOString().split("T")[0], [value]);

	return (
		<RNCalendar
			onDayPress={(day) => {
				const timestamp = new Date(day.dateString).getTime();
				onChange(timestamp);
			}}
			markedDates={{
				[selectedDateString]: {
					selected: true,
					disableTouchEvent: true,
				},
			}}
			theme={calendarTheme}
		/>
	);
}

const useStyles = () => {
	const colors = useThemeColors();
	const calendarTheme: Theme = {
		calendarBackground: colors.background,

		textSectionTitleColor: colors.text,
		monthTextColor: colors.text,

		selectedDayTextColor: colors.text,
		selectedDayBackgroundColor: colors.primary,

		todayTextColor: colors.text,
		todayBackgroundColor: colors.backgroundSecondary,

		dayTextColor: colors.text,
		textDisabledColor: colors.textSecondary,

		textDayFontFamily: EFonts.Primary,
		textMonthFontFamily: EFonts.Primary,
		todayButtonFontFamily: EFonts.Primary,
		textDayHeaderFontFamily: EFonts.Primary,
	};
	return { calendarTheme };
};
