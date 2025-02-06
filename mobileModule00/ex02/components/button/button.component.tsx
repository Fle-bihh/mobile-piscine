import { Text, Pressable } from 'react-native';
import { getButtonStyles } from './button.styles';
import { EButtonType, IButtonProps } from './button.types';

export const Button = ({
	title,
	onPress,
	type = EButtonType.Primary,
	containerStyle,
	textStyle,
}: IButtonProps) => {
	const styles = getButtonStyles(type);
	return (
		<Pressable onPress={onPress} style={[containerStyle, styles.container]}>
			<Text style={[textStyle, styles.text]}>{title}</Text>
		</Pressable>
	);
};
