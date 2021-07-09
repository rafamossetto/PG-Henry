import styled from "styled-components";

const AdminContainer = styled.div`
  font-family: Questrial;
  padding-top: 160px;
  .isAdmin {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
  }
  .boxTitle {
    color: #f05454;
  }
  .movieBox {
    margin: 10px;
    background-color: #2d4059;
    padding: 0px 5px 5px 25px;
  }

  .movieList {
    overflow-y: scroll;
    width: 500px;
    height: 300px;
    color: #ffffff;
  }
  .boxContainer {
    display: flex;
    margin-top: 30px;
    width: 98%;
    justify-content: space-evenly;
    align-items: center;
  }

  .swapButton {
    height: 75px;
    width: 75px;
  }

  .userBox {
    margin: 30px 10px 300px 100px;
    width: 180px;
    background-color: #2d4059;
    padding: 0px 5px 5px 5px;
    .boxTitle {
    padding-left: 10px;
  }
  }
  .userList {
    overflow-y: scroll;
    color: #ffffff;
    height: 280px;
    background-color: #222831;
    padding: 0px 0px 0px 15px;
  }

  .postMovieForm {
    background-color: #2d4059;
    height: 600px;
    width: 850px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 50px;
    padding-bottom: 20px;
  }

  .formInputContainer {
    display: flex;
    justify-content: space-evenly;
    color: #ffffff;
    input {
      height: 35px;
      width: 280px;
      padding-left: 10px;
      font-family: Questrial;
      background-color: #c4c4c4;
      color: #222831;
    }
  }

  .postMovieButton {
    background-color: #f05454;
    width: 240px;
    height: 60px;
    margin-top: 40px;
    color: #ffffff;
    font-size: 18px;
    border-radius: 12px;
    &:hover {
      background-color: #d93c3c;
      transition: 0.3s;
    }
  }
`;

export default AdminContainer;
