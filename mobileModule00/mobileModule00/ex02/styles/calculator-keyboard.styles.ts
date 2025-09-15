import { EPalette } from '@/constants/colors.constants';
import { StyleSheet, useWindowDimensions } from 'react-native';

export const useCalculatorKeyboardStyles = () => {
	const { width, height } = useWindowDimensions();
	const keyboardHeight = height / 2;
	const keyboardWidth = width;
	const keySpacing = 4;
	const keyHeight = keyboardHeight / 4 - keySpacing;
	const keyWidth = keyboardWidth / 5 - keySpacing;

	const styles = StyleSheet.create({
		rootContainer: {
			width: keyboardWidth,
			height: keyboardHeight,
			backgroundColor: EPalette.Primary,
			padding: keySpacing,
		},
		tableContentContainer: {
			flex: 1,
			justifyContent: 'space-between',
		},
		lineContentContainer: {
			flex: 1,
			justifyContent: 'space-between',
		},
		keyContainer: {
			backgroundColor: 'rgba(255,255,255,0.1)',
			width: keyWidth,
			height: keyHeight,
			justifyContent: 'center',
			alignItems: 'center',
		},
		keyLabel: {
			fontSize: 24,
			fontWeight: '600',
		},
	});

	return { styles };
};
