import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getMovieList } from "../../actions/movies";
import { getUsers, isAdmin } from "../../actions/users";
import AdminContainer from "./AdminStyles";
import { BiCameraMovie, BiUserCheck, BiStore } from "react-icons/bi";

function AdminPage({props}) {
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(null);


  useEffect(() => {
    let verifyAdmin = async () => {
        const authorized = await isAdmin();
        setAdmin(authorized);
    };
    verifyAdmin();
    dispatch(getMovieList());
    dispatch(getUsers());
   
  }, [dispatch]);
  
  return (
    <AdminContainer>
      {admin ? (
        <div className="boxContainer">
          <div className="userBox">
            <BiCameraMovie size="100" />
            <Link to='/AdminMovies' className='link'>Movies</Link>
          </div>
          <div className="userBox">
            <BiUserCheck size="100" />
            <Link to='/users' className='link'>Users</Link>
          </div>
          <div className="userBox">
            <BiStore size="100" />
            <Link to='/AdminProd' className='link'>Products</Link>
          </div>
        </div>
       ) : (
        <div className="errorCnt">
        <img
            className="sadFace"
            src="https://res.cloudinary.com/juancereceda/image/upload/v1625945361/sad-face-in-rounded-square_q7qmr7.png"
            alt="404"
        />
        <h1 className="errorMsg">Sorry! We've nothing for you here</h1>
        </div>
    )}   
    </AdminContainer>    
  )          
}

export default AdminPage;
