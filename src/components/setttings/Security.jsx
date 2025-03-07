import React, { useState } from "react";
import SettingsSection from "./SettingsSection";
import { Lock, User } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Security = () => {
  const [twoFactor, setTwoFactor] = useState({
    twoFA: true,
  });
  return (
    <SettingsSection icon={Lock} title={"Security"}>
      <ToggleSwitch
        label={"Two Factor Authentication"}
        isOn={twoFactor}
        onToggle={(e) => setTwoFactor(!twoFactor)}
      />

      <div className="mt-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
          Change Password
        </button>
      </div>
    </SettingsSection>
  );
};

export default Security;
