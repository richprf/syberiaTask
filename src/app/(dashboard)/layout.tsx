

import DashboardHeader from "@/componets/common/dashboardHeader/dashboardHeader";
import DashboardNvbar from "@/componets/common/dashboardNvbar/dashboardNvbar";
import React, { ReactNode } from "react";

const Dashboardlayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="bg-[#ececec] dark:bg-zinc-700 flex gap-[19px] p-[19px]">
      <DashboardNvbar />
      <div className="w-full">
        <DashboardHeader /> <div>{children}</div>
      </div>
    </div>
  );
};

export default Dashboardlayout;
