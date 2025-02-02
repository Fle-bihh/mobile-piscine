import { getIndexStyles } from '@/styles/index.styles';
import { View } from 'react-native';
import { Calculator } from '@/components/calculator/calculator.component';

export default function Index() {
	const pageStyles = getIndexStyles();

	return (
		<View style={pageStyles.container}>
			<Calculator />
		</View>
	);
}
