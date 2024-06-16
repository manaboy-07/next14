import React from "react";
import ServerComponentOne from "../components/server-component-one";
import ClientComponentOne from "../components/client-component-one";
//componets folder, assiocoated arer server-component one and two, client -component one and two in the components folder
// importing server components in another server component i.e server oe and two
//importing server-server, client to client or client-server no isssues.
//but importing a servrver into a client component problem go dey, bcos the use client will convert ut
//its not supported but we can overcome it passing it as props, using children prop
function InterleavingPage() {
  return (
    <>
      <h1>Interleaving page</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}

export default InterleavingPage;
