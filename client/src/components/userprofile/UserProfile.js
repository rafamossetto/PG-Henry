import React from "react";
import { getTokenLocalStorage } from "../../reducer/reducer";
function UserProfile() {
  const token = getTokenLocalStorage();
  return <div>{token ? <h1>Hello user</h1> : <h1>Log in</h1>}</div>;
}

export default UserProfile;
