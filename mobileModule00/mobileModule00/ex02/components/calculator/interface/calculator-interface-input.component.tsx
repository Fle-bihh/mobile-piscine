import { useCalculatorContext } from '@/contexts/calculator.context';
import { useCalculatorInterfaceStyles } from '@/styles/calculator-interface.styles';
import { Text, View } from 'react-native';

export const CalculatorInterfaceInput = () => {
	const { inputValue } = useCalculatorContext();
	const { styles } = useCalculatorInterfaceStyles();
	return (
		<View style={styles.boxContentContainer}>
			<Text style={styles.boxContentText}>{inputValue}</Text>
		</View>
	);
};
