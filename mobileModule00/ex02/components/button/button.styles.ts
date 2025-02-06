import { StyleSheet } from 'react-native';
import { EButtonType } from './button.types';
import { EPalette } from '@/constants/colors.constants';

const getButtonBackgroundColor = (type: EButtonType) => {
	switch (type) {
		case EButtonType.Primary:
			return EPalette.Primary;

		default:
			return EPalette.Primary;
	}
};

export const getButtonStyles = (type: EButtonType) => {
	const backgroundColor = getButtonBackgroundColor(type);
	if (type === EButtonType.Custom)
		return StyleSheet.create({ container: {}, text: {} });
	return StyleSheet.create({
		container: {
			backgroundColor,
			padding: 12,
			borderRadius: 12,
		},
		text: {
			fontSize: 12,
			fontWeight: '600',
		},
	});
};
