import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { ICalculatorKey } from '../../../types/calculator.types';
import { KEYS_PER_LINE } from '@/constants/calculator.constants';
import { CalculatorKeyboardKey } from './calculator-keyboard-key.component';
import { useCalculatorKeyboardStyles } from '../../../styles/calculator-keyboard.styles';

interface CalculatorKeyboardLineProps {
	lines: ICalculatorKey[];
}
export const CalculatorKeyboardLine = ({
	lines,
}: CalculatorKeyboardLineProps) => {
	const { styles } = useCalculatorKeyboardStyles();
	if (lines.length !== KEYS_PER_LINE) return null;

	return (
		<FlatList
			contentContainerStyle={styles.lineContentContainer}
			horizontal
			data={lines}
			renderItem={(i) => <CalculatorKeyboardKey item={i.item} />}
		/>
	);
};
