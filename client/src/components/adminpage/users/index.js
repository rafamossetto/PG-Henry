import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledDiv from "./userStyles";
import { getUsers, updateUser } from "../../../actions/users";
import swal from "sweetalert";
import NotFound from "../../404/NotFound";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  //search
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
  }

  //BlockUser
  const ChangeClick = async (user, e) => {
    //console.log('banned: ', user.banned)
    e.preventDefault();
    const blockDisable = await swal({
      title: `Are you sure you want to ${
        user.banned ? "disable" : "block"
      }  to ${user.username}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (blockDisable) {
      dispatch(getUsers());
      console.log("Admin: ", user.isAdmin);
      dispatch(
        updateUser(
          {
            ...user,
            banned: !user.banned,
          },
          user._id
        )
      );
      dispatch(getUsers());
      await swal("The change has been made!", {
        icon: "success",
        buttons: false,
        timer: 1500,
      });
    }
  };

  const handleClick = async (user, e) => {
    e.preventDefault();
    const changeRole = await swal({
      title: `Are you sure you want to change the role ${
        user.isAdmin ? "Admin" : "User"
      }  to ${user.isAdmin ? "User" : "Admin"}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (changeRole) {
      dispatch(getUsers());
      console.log("Admin: ", user.isAdmin);
      dispatch(
        updateUser(
          {
            ...user,
            isAdmin: !user.isAdmin,
          },
          user._id
        )
      );
      dispatch(getUsers());
      await swal("The change has been made!", {
        icon: "success",
        buttons: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      {window.localStorage.token && users.length ? (
        <StyledDiv>
          <div className="search">
            <form onSubmit={(e) => handleSubmit(e)} className="formContainer">
              <div className="searchBarContainer">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Search Username..."
                  type="text"
                  className="input"
                ></input>
              </div>
            </form>
          </div>

          <table className="container">
            <thead className="title">
              <h1>Users registrates</h1>
              <tr className="header">
                <td>Username</td>
                <td>Email</td>
                <td>Adm/User</td>
                <td>Ava/Block</td>
              </tr>
            </thead>
            <tbody className="item">
              {users &&
                users
                  .filter((user) =>
                    name ? user.username.includes(name) : user
                  )
                  .map((user) => (
                    <tr key={user._id}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <label>Is {user.isAdmin ? "Admin" : "User"}</label>
                        <button
                          className="userButton"
                          onClick={(e) => handleClick(user, e)}
                        >
                          {user.isAdmin ? "ChangeToUser" : "ChangeToAdmin"}
                        </button>
                      </td>
                      <td>
                        <button
                          className="userButton"
                          onClick={(e) => ChangeClick(user, e)}
                        >
                          {user.banned ? "UserBlocked" : "Available"}
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </StyledDiv>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Users;
