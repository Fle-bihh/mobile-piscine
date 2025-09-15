import { useSimpleButton } from "@/hooks/simple-button.hook";
import { getIndexStyles } from "@/styles/index.styles";
import { Button } from "@/components/button/button.component";
import { Text, View } from "react-native";

export default function Index() {
  const { onPressButton } = useSimpleButton()

  const pageStyles = getIndexStyles();

  const TITLE = "Welcome to Mobile Piscine!"
  const BUTTON_TITLE = "Press me"
  
  return (
    <View
      style={pageStyles.container}
    >
      <Text style={pageStyles.title}>{TITLE}</Text>
      <Button title={BUTTON_TITLE} onPress={onPressButton} />
    </View>
  );
}
