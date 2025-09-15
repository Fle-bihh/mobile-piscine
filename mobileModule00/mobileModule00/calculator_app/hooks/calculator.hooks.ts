import {
	ECalculatorKeys,
	ECalculatorKeyTypes,
	ICalculatorContext,
} from '@/types/calculator.types';
import { useState } from 'react';
import { evaluateExpression } from '@/functions/calculator.functions';

export const useCalculator = (): ICalculatorContext => {
	const [inputValue, setInputValue] = useState<string>('00');
	const [resultValue, setResultValue] = useState<string>('');

	const onKeyPressed = (key: ECalculatorKeys, type: ECalculatorKeyTypes) => {
		switch (type) {
			case ECalculatorKeyTypes.Empty:
				break;
			case ECalculatorKeyTypes.Value:
				const MAX_KEYS_LENGTH = 20;
				if (inputValue.length <= MAX_KEYS_LENGTH) {
					setInputValue(inputValue + key);
				} else {
					setInputValue(inputValue.slice(0, MAX_KEYS_LENGTH) + key);
				}
				break;
			case ECalculatorKeyTypes.Command:
				switch (key) {
					case ECalculatorKeys.Equals:
						const evaluated = evaluateExpression(inputValue);
						setResultValue(evaluated);
						break;
					case ECalculatorKeys.Clear:
						if (inputValue.length > 0) {
							setInputValue(
								inputValue.slice(0, inputValue.length - 1),
							);
						}
						break;
					case ECalculatorKeys.ClearAll:
						if (inputValue.length > 0) {
							setInputValue('');
						} else if (resultValue.length > 0) {
							setResultValue('');
						}
						break;
					default:
						break;
				}
			default:
				break;
		}
	};

	return { inputValue, resultValue, onKeyPressed };
};
