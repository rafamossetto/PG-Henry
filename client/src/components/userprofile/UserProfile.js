import React from "react";
import {
  getTokenLocalStorage,
  getUserDataStorage,
} from "../../reducer/reducer";
import StyledUserPage from "./StyledUserPage";
import Reservations from "./Reservations";

function UserProfile() {
  const token = getTokenLocalStorage();
  const user = getUserDataStorage();
  return (
    <StyledUserPage>
      {token ? (
        <>
          <h1>Welcome back, {user.username}!</h1>
          <Reservations />
        </>
      ) : (
        <div className="errorCnt">
          <img
            className="sadFace"
            src="https://res.cloudinary.com/juancereceda/image/upload/v1625945361/sad-face-in-rounded-square_q7qmr7.png"
            alt="404"
          />
          <h1 className="errorMsg">
            You are not logged in! Please come back as a user
          </h1>
        </div>
      )}
    </StyledUserPage>
  );
}

export default UserProfile;
