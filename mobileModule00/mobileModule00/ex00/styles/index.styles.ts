import { EPalette } from "@/constants/colors.constants";
import { StyleSheet } from "react-native";

export const getIndexStyles = () => {
    return StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 32
              },
        title: {
            padding: 12,
            borderRadius: 12
        }
    })
}