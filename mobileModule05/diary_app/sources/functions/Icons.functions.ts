import { EIcons } from "@/constants/Icons.constants";
import { TIonicon } from "@/types/Ionicons.types";

function getIconName(icon: EIcons): TIonicon {
	switch (icon) {
		case EIcons.Github:
			return "logo-github";
		case EIcons.Google:
			return "logo-google";

		default:
			return "help";
	}
}

export default getIconName;
