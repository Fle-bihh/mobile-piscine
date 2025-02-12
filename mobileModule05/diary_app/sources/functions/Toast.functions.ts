import { Toast } from "expo-react-native-toastify";

function success(message: string) {
	Toast.success(message);
}

function error(message: string) {
	Toast.error(message);
}

function info(message: string) {
	Toast.info(message);
}

const toaster = { info, success, error };
export default toaster;
