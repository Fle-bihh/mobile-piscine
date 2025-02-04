import { StyleSheet } from "react-native";

export function getSearchBarStyles() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(0,0,0,1)",
      paddingVertical: 4,
      paddingHorizontal: 16,
      borderRadius: 8,
      flex: 1,
    },
    label: {
      color: "white",
    },
  });

  const placeholderTextColor = "rgba(255,255,255,0.7)";

  return { styles, placeholderTextColor };
}
