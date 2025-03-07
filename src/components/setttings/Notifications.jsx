import React, { useState } from "react";
import SettingsSection from "./SettingsSection";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
  });

  return (
    <SettingsSection icon={Bell} title={"Notifications"}>
      <ToggleSwitch
        label={"Push Notifications"}
        isOn={notifications.push}
        onToggle={(e) =>
          setNotifications({ ...notifications, push: !notifications.push })
        }
      />
      <ToggleSwitch
        label={"Email Notifications"}
        isOn={notifications.email}
        onToggle={(e) =>
          setNotifications({ ...notifications, email: !notifications.email })
        }
      />
      <ToggleSwitch
        label={"SMs Notifications"}
        isOn={notifications.sms}
        onToggle={(e) =>
          setNotifications({ ...notifications, sms: !notifications.sms })
        }
      />
    </SettingsSection>
  );
};

export default Notifications;
