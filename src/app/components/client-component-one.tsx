import React from "react";
import { useState } from "react";
function ClientComponentOne({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("Batman");
  return (
    <>
      <h1>Client component one</h1>
      {children}
    </>
  );
}

export default ClientComponentOne;
