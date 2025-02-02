import { useCalculatorContext } from '@/contexts/calculator.context';
import { useCalculatorInterfaceStyles } from '@/styles/calculator-interface.styles';
import { Text, View } from 'react-native';

export const CalculatorInterfaceResult = () => {
	const { resultValue } = useCalculatorContext();
	const { styles } = useCalculatorInterfaceStyles();
	return (
		<View style={styles.boxContentContainer}>
			<Text style={styles.boxContentText}>{resultValue}</Text>
		</View>
	);
};
