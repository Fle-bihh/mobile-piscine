import { useCalculator } from '@/hooks/calculator.hooks';
import { ICalculatorContext } from '@/types/calculator.types';
import { createContext, ReactNode, useContext } from 'react';

export const CalculatorContext = createContext<ICalculatorContext | undefined>(
	undefined,
);

interface ICalculatorProviderProps {
	children: ReactNode;
}

export const CalculatorProvider = ({ children }: ICalculatorProviderProps) => {
	const calculator = useCalculator();

	return (
		<CalculatorContext.Provider value={calculator}>
			{children}
		</CalculatorContext.Provider>
	);
};

export const useCalculatorContext = (): ICalculatorContext => {
	const context = useContext(CalculatorContext);
	if (!context) {
		throw new Error(
			'useCalculatorContext must be used within a CalculatorProvider',
		);
	}
	return context;
};
