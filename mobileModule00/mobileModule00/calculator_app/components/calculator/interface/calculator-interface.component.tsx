import { View } from 'react-native';
import { CalculatorInterfaceInput } from './calculator-interface-input.component';
import { CalculatorInterfaceResult } from './calculator-interface-result.component';
import { useCalculatorInterfaceStyles } from '@/styles/calculator-interface.styles';

export const CalculatorInterface = () => {
	const { styles } = useCalculatorInterfaceStyles();
	return (
		<View style={styles.rootContainer}>
			<CalculatorInterfaceInput />
			<CalculatorInterfaceResult />
		</View>
	);
};
