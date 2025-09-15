import {
	ECalculatorKeys,
	ECalculatorKeyTypes,
	ICalculatorKey,
} from '@/types/calculator.types';

export const KEYS_PER_LINE = 5;

export const CalculatorKeysLines: ICalculatorKey[][] = [
	[
		{
			value: ECalculatorKeys.Seven,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.Eight,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.Nine,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.Clear,
			type: ECalculatorKeyTypes.Command,
		},
		{
			value: ECalculatorKeys.ClearAll,
			type: ECalculatorKeyTypes.Command,
		},
	],

	[
		{
			value: ECalculatorKeys.Four,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.Five,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.Six,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.Add,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.Substract,
			type: ECalculatorKeyTypes.Value,
		},
	],

	[
		{
			value: ECalculatorKeys.One,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.Two,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.Three,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.Multiply,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.Divide,
			type: ECalculatorKeyTypes.Value,
		},
	],

	[
		{
			value: ECalculatorKeys.Zero,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.Point,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.DoubleZero,
			type: ECalculatorKeyTypes.Value,
		},
		{
			value: ECalculatorKeys.Equals,
			type: ECalculatorKeyTypes.Command,
		},
		{
			value: ECalculatorKeys.Empty,
			type: ECalculatorKeyTypes.Empty,
		},
	],
];
