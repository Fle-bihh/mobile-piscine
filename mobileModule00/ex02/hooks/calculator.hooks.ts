import {
	ECalculatorKeys,
	ECalculatorKeyTypes,
	ICalculatorContext,
} from '@/types/calculator.types';
import { useState } from 'react';

export const useCalculator = (): ICalculatorContext => {
	const [inputValue, setInputValue] = useState<string>('00');
	const [resultValue, setResultValue] = useState<string>('');

	const onKeyPressed = (key: ECalculatorKeys, type: ECalculatorKeyTypes) => {
		switch (type) {
			case ECalculatorKeyTypes.Empty:
				break;
			case ECalculatorKeyTypes.Value:
				if (inputValue.length <= 10) {
					setInputValue(inputValue + key);
				} else {
					setInputValue(inputValue.slice(0, 10) + key);
				}
				break;
			case ECalculatorKeyTypes.Command:
				switch (key) {
					case ECalculatorKeys.Equals:
						setResultValue(inputValue);
						setInputValue('');
						break;
					case ECalculatorKeys.Clear:
						inputValue.length > 0 &&
							setInputValue(
								inputValue.slice(0, inputValue.length - 1),
							);
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
