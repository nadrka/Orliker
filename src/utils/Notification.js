import { NotificationManager } from "react-notifications";

export function createNotification(type, errorMessage, successMessage) {
  if (type == "success") {
    NotificationManager.success(successMessage, "Sukces", 2000);
  }
  if (type == "error") {
    NotificationManager.error(errorMessage, "Error", 3000);
  }
}
