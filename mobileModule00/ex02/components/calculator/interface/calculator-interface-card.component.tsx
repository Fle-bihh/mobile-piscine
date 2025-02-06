import { useCalculatorInterfaceStyles } from '@/styles/calculator-interface.styles';
import { ReactNode } from 'react';
import * as React from 'react';
import { Text, View } from 'react-native';

interface ICalculatorInterfaceCardProps {
	children: ReactNode;
	title: string;
}
export const CalculatorInterfaceCard = ({
	children,
	title,
}: ICalculatorInterfaceCardProps) => {
	const { styles } = useCalculatorInterfaceStyles();
	return (
		<View style={styles.boxContainer}>
			<Text style={styles.boxTitleText}>{title}</Text>
			{children}
		</View>
	);
};
