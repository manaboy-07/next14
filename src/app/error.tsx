"use client";
import React, { useEffect } from "react";

function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.log("Error");
  }, [error]);
  return <div>Error occured</div>;
}

export default ErrorPage;
