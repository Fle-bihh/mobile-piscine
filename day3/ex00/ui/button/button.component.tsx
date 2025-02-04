import { Text, Pressable } from "react-native"
import { getButtonStyles } from "./button.styles"
import { EButtonType, IButtonProps } from "./button.types"


export const Button = ({ title, onPress, type = EButtonType.Primary, containerStyle, textStyle }: IButtonProps) => {
    const buttonStyles = getButtonStyles(type)
    return (
        <Pressable onPress={onPress} style={[containerStyle, buttonStyles.container]}>
            <Text style={[textStyle, buttonStyles.text]}>{title}</Text>
        </Pressable>
    )
}