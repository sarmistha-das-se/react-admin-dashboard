import React from "react";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import Header from "../components/common/Header";
import { DollarSign, UserCheck, UserPlus, UsersIcon } from "lucide-react";
import UsersTable from "../components/users/UsersTable";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatMap from "../components/users/UserActivityHeatMap";
import UserDemographicChart from "../components/users/UserDemographicChart";


const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* StatCard component */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New Users TOday"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#F59E0B10B981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />

          <StatCard
            name="Churn Rate"
            icon={DollarSign}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>
        <UsersTable />

        {/* User Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserActivityHeatMap />
          <UserDemographicChart />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
