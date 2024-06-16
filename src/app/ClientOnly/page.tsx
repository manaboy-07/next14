"use client";
import React from "react";
import { useTheme } from "../components/ThemeProvider";
import { clientSideFunction } from "../utiils/client-utils";

function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <div
      style={{
        color: theme.colors.primary,
      }}
    >
      Client route {result}
    </div>
  );
}

export default ClientRoutePage;
