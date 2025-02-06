import { Text, View } from "react-native"
import { getCentralTextScreenStyles } from "./central-text.styles"

interface CentralTextScreenProps {
    title: string
}
export default function CentralTextScreen({ title }: CentralTextScreenProps) {
    const styles = getCentralTextScreenStyles()
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
}