import React from "react";

export default function DashboardLayout({
  children,
  users,
  notifications,
  revenue,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>

    // useranalytics
    //revenue numetirc
    //notifications
    //These are all components
  );
}
//you have 3 slots , those that have the @ symbol on thier folder name or sturcture
