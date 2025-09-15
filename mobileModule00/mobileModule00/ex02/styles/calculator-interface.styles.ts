import { StyleSheet } from 'react-native';

export const useCalculatorInterfaceStyles = () => {
	const styles = StyleSheet.create({
		rootContainer: {
			padding: 24,
			gap: 16,
			flex: 1,
		},
		boxContainer: {
			backgroundColor: 'white',
			padding: 16,
			borderRadius: 8,
			flex: 1,
		},
		boxTitleText: {
			fontWeight: '200',
			fontSize: 16,
			position: 'absolute',
			backgroundColor: 'white',
			borderRadius: 16,
			paddingVertical: 2,
			paddingHorizontal: 8,
			top: -8,
			left: -8,
		},
		boxContentContainer: {
			padding: 4,
		},
		boxContentText: {
			fontSize: 24,
		},
	});

	return { styles };
};
