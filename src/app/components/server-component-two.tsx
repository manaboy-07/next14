import React from "react";
import fs from "fs";

function ServerComponentTwo() {
  fs.readFileSync("src/components/server-component-two.tsx", "utf-8");
  return <div>server-component-two</div>;
}

export default ServerComponentTwo;
