import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { EPalette } from "@/constants/Colors.constants";
import { ThemedText } from "../themed/ThemedText.component";

interface ErrorProps {
	error: string | null;
}
export default function Error({ error }: ErrorProps) {
	return <ThemedText style={{ color: EPalette.Error }}>Error: {error}</ThemedText>;
}

const styles = StyleSheet.create({});
