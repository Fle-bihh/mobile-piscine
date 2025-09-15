import { log } from '@/functions/log.functions';
import {
	ECalculatorKeys,
	ECalculatorKeyTypes,
	ICalculatorContext,
} from '@/types/calculator.types';
import { useState } from 'react';

export const useCalculator = (): ICalculatorContext => {
	const [inputValue, setInputValue] = useState<string>('0');
	const [resultValue, setResultValue] = useState<string>('0');

	const onKeyPressed = (key: ECalculatorKeys, type: ECalculatorKeyTypes) => {
		log('Button pressed: ', key, ' | Type: ', type);
	};

	return { inputValue, resultValue, onKeyPressed };
};
