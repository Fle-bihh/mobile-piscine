import { EAppIcons } from "@/constants/icons.constants";
import { TIonicon } from "@/types/ionicons";

export function getAppIconName(icon: EAppIcons): TIonicon {
  switch (icon) {
    case EAppIcons.Currently:
      return "calendar";
    case EAppIcons.Today:
      return "calendar-clear";
    case EAppIcons.Weekly:
      return "calendar-number";
    case EAppIcons.Geoloca:
      return "location-outline";
    default:
      return "accessibility";
  }
}
