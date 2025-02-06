import { ICalculatorKey } from '../../../types/calculator.types';
import { useCalculatorKeyboardStyles } from '../../../styles/calculator-keyboard.styles';
import { Button } from '@/components/button/button.component';
import { EButtonType } from '@/components/button/button.types';
import { useCalculatorContext } from '@/contexts/calculator.context';

interface CalculatorKeyboardKeyProps {
	item: ICalculatorKey;
}
export const CalculatorKeyboardKey = ({ item }: CalculatorKeyboardKeyProps) => {
	const { styles } = useCalculatorKeyboardStyles();
	const { onKeyPressed } = useCalculatorContext();

	const onPress = () => {
		onKeyPressed(item.value, item.type);
	};
	return (
		<Button
			onPress={onPress}
			textStyle={styles.keyLabel}
			containerStyle={styles.keyContainer}
			title={item.value}
			type={EButtonType.Custom}
		/>
	);
};
