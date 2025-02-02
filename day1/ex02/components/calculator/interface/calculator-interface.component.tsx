import { View } from 'react-native';
import { CalculatorInterfaceInput } from './calculator-interface-input.component';
import { CalculatorInterfaceResult } from './calculator-interface-result.component';
import { CalculatorInterfaceCard } from './calculator-interface-card.component';
import { useCalculatorInterfaceStyles } from '@/styles/calculator-interface.styles';

export const CalculatorInterface = () => {
	const { styles } = useCalculatorInterfaceStyles();
	return (
		<View style={styles.rootContainer}>
			{/* <CalculatorInterfaceCard
				children={<CalculatorInterfaceInput />}
				title="Input"
			/>
			<CalculatorInterfaceCard
				children={<CalculatorInterfaceResult />}
				title="Result"
			/> */}
			<CalculatorInterfaceInput />
			<CalculatorInterfaceResult />
		</View>
	);
};
