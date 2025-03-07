import React, { useState } from "react";
import SettingsSection from "./SettingsSection";
import { MessageCircleQuestionIcon, Plus } from "lucide-react";

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
      icon: "/google.png",
    },
    {
      id: 2,
      name: "Facebook",
      connected: false,
      icon: "/facebook.svg",
    },
    {
      id: 3,
      name: "Twitter",
      connected: true,
      icon: "/x.png",
    },
  ]);
  return (
    <SettingsSection
      icon={MessageCircleQuestionIcon}
      title={"Connected Accounts"}
    >
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between py-2 border-b border-gray-700"
        >
          <div className="flex gap-1">
            <img
              src={account.icon}
              alt={account.name}
              className="w-8 h-8 object-cover rounded-full mr-4"
            />
            <span className="text-gray-100">{account.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded ${
              account.connected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            } transition duration-200`}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((acc) => {
                  if (acc.id === account.id) {
                    return {
                      ...acc,
                      connected: !acc.connected,
                    };
                  }
                  return acc;
                })
              );
            }}
          >
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}
      <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200">
        <Plus className="mr-2" size={18} />
        Add Account
      </button>
    </SettingsSection>
  );
};

export default ConnectedAccounts;
