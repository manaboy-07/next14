import React from "react";
import { useState } from "react";
function ClientComponentTwo() {
  const [name, setName] = useState("Batman");
  return <div>client-component-two</div>;
}

export default ClientComponentTwo;
