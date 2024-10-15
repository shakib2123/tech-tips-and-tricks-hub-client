"use client";

import FollowingActivityTable from "@/components/page/dashboard/FollowingActivityTable";
import { useUser } from "@/context/user.provider";
import { useFollowingActivity } from "@/hooks/user.hook";
import { Spinner, Tab, Tabs } from "@nextui-org/react";
import { useEffect, useState } from "react";

const FollowingActivity = () => {
  const [selectedTab, setSelectedTab] = useState("following");
  const { user } = useUser();
  const queryData = { userEmail: user?.email, selectedTab };

  const {
    data: usersData,
    isPending,
    refetch,
  } = useFollowingActivity(queryData);

  const handleTabChange = (key: any) => {
    setSelectedTab(key);
    console.log("Selected Tab:", key);
  };

  useEffect(() => {
    refetch();
  }, [selectedTab, user?.email, refetch]);

  console.log(usersData);

  return (
    <section className="max-w-screen-xl mx-auto p-3 min-h-screen">
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          variant="bordered"
          color="primary"
          className="w-full"
          selectedKey={selectedTab}
          onSelectionChange={handleTabChange}
        >
          <Tab key="following" title="Following">
            {isPending ? (
              <div className="w-full mt-4 h-40 flex items-center justify-center">
                <Spinner size="lg" />
              </div>
            ) : (
              <FollowingActivityTable usersData={usersData?.data} />
            )}
          </Tab>
          <Tab key="followers" title="Followers">
            {isPending ? (
              <div className="w-full mt-4 h-40 flex items-center justify-center">
                <Spinner size="lg" />
              </div>
            ) : (
              <FollowingActivityTable usersData={usersData?.data} />
            )}
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default FollowingActivity;
