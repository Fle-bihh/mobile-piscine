import { TextStyle, ViewStyle } from 'react-native';

export enum EButtonType {
	Primary = 'primary',
	Custom = 'custom',
}

export interface IButtonProps {
	onPress?: () => void;
	title?: string;
	type?: EButtonType;
	containerStyle?: ViewStyle;
	textStyle?: TextStyle;
}
