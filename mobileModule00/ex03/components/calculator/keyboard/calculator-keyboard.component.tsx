import { FlatList, View } from 'react-native';
import { useCalculatorKeyboardStyles } from '../../../styles/calculator-keyboard.styles';
import { CalculatorKeysLines } from '@/constants/calculator.constants';
import { CalculatorKeyboardLine } from './calculator-keyboard-line.component';

export const CalculatorKeyboard = () => {
	const { styles } = useCalculatorKeyboardStyles();
	return (
		<View style={styles.rootContainer}>
			<FlatList
				contentContainerStyle={styles.tableContentContainer}
				data={CalculatorKeysLines}
				renderItem={(i) => <CalculatorKeyboardLine lines={i.item} />}
				scrollEnabled={false}
			/>
		</View>
	);
};
