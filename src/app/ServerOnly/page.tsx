import React from "react";
import { serverSideFunction } from "../utiils/server-utils";
// check uti9ls folder for the server actions code used here
function ServerRoutePage() {
  console.log("Server route rendered");
  //since its a server component the console log will be on the client
  const result = serverSideFunction();
  return (
    <>
      <h1>Server side route page</h1>
      <p>Result</p>
    </>
  );
}

export default ServerRoutePage;
