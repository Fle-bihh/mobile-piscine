import { View } from 'react-native';
import { CalculatorKeyboard } from './keyboard/calculator-keyboard.component';
import { getCalculatorStyles } from '../../styles/calculator.styles';
import { CalculatorProvider } from '@/contexts/calculator.context';
import { CalculatorInterface } from './interface/calculator-interface.component';

export const Calculator = () => {
	const styles = getCalculatorStyles();
	return (
		<View style={styles.container}>
			<CalculatorProvider>
				<CalculatorInterface />
				<CalculatorKeyboard />
			</CalculatorProvider>
		</View>
	);
};
