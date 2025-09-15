import { EPalette } from "@/constants/colors.constants";
import { Text, View } from "react-native";

interface ErrorDisplayProps {
	error: string;
}
export default function ErrorDisplay({ error }: ErrorDisplayProps) {
	return (
		<View>
			<Text
				style={{
					color: EPalette.WarmRed,
					fontSize: 24,
					textAlign: "center",
					paddingVertical: 24,
					paddingHorizontal: 24,
				}}
			>
				{error}
			</Text>
		</View>
	);
}
