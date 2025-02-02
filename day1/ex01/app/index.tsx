import { useSimpleButton } from "@/hooks/simple-button.hook";
import { getIndexStyles } from "@/styles/index.styles";
import { Button } from "@/ui/button/button.component";
import { Text, View } from "react-native";

export default function Index() {
  const { onPressButton, title } = useSimpleButton()

  const pageStyles = getIndexStyles();

  const buttonTitle = "Press me"

  return (
    <View
      style={pageStyles.container}
    >
      <Text style={pageStyles.title}>{title}</Text>
      <Button title={buttonTitle} onPress={onPressButton} />
    </View>
  );
}
