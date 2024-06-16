import React from "react";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};
async function UsersPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return <div>page</div>;
}

export default UsersPage;
