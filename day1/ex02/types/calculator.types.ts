export enum ECalculatorKeys {
	Point = '.',
	Zero = '0',
	One = '1',
	Two = '2',
	Three = '3',
	Four = '4',
	Five = '5',
	Six = '6',
	Seven = '7',
	Eight = '8',
	Nine = '9',
	DoubleZero = '00',
	Clear = 'C',
	ClearAll = 'AC',
	Add = '+',
	Substract = '-',
	Multiply = 'x',
	Divide = '/',
	Equals = '=',
	Empty = '',
}

export enum ECalculatorKeyTypes {
	Value = 'value',
	Command = 'command',
	Empty = 'empty',
}

export interface ICalculatorKey {
	value: ECalculatorKeys;
	type: ECalculatorKeyTypes;
}

export interface ICalculatorContext {
	inputValue: string;
	resultValue: string;

	onKeyPressed: (key: ECalculatorKeys, type: ECalculatorKeyTypes) => void;
}
