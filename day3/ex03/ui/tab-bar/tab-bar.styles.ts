import { Platform, StyleSheet } from "react-native";

export const getTabBarStyles = () => {
  const isWeb = Platform.OS === "web";
  return StyleSheet.create({
    container: {
      paddingTop: 12,
      paddingBottom: isWeb ? 24 : 0,
      display: "flex",
      flexDirection: "row",
      borderTopWidth: 0.5,
      borderTopColor: "rgba(0,0,0,0.2)",
    },
  });
};

interface TabBarLabelStylesProps {
  isActive: boolean;
}
export const getTabBarLabelStyles = ({ isActive }: TabBarLabelStylesProps) => {
  return StyleSheet.create({
    labelContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    label: {
      color: isActive ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.5)",
      fontSize: 10,
      fontWeight: isActive ? "400" : "200",
    },
  });
};
