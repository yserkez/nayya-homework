import React from "react";
import { NotificationPanel } from "../components/NotificationPanel";
import Nav from "../components/Nav";
import { OverviewPanel } from "../components/OverviewPanel";
import { SpendingPanel } from "../components/SpendingPanel";
import { NotificationType } from "../types";

type ConciergeProps = {
  user: {
    name: string;
    memberSince: string;
    potentialSavings: number;
    lifetimeSavings: number;
  };
  notifications: Array<NotificationType>;
};

export const Concierge = ({ user, notifications }: ConciergeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue to-white">
      <div className="grid grid-cols-12 gap-4 py-8 px-32">
        <div className="col-span-9">
          <SpendingPanel
            name={user.name}
            memberSince={user.memberSince}
            potentialSavings={user.potentialSavings}
            lifetimeSavings={user.lifetimeSavings}
          />
          {notifications.map((notification) => (
            <NotificationPanel data={notification} />
          ))}
          {notifications.length < 4 && (
            <div className="text-6xl text-left w-2/3 pt-8">
              I'm working hard to find savings for you!{" "}
            </div>
          )}
        </div>
        <div className="col-span-3">
          <OverviewPanel />
        </div>
      </div>
    </div>
  );
};

export default Concierge;
