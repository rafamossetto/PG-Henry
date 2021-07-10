import styled from "styled-components";

const form = styled.div`
  padding-top: 18%;
  width: 100%;
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 450px;
    justify-content: space-evenly;
    align-items: center;
    background-color: #2d4059;
    margin-bottom: 10%;
    border: 1px solid #ea5455;
    input {
      font-family: Questrial;
      font-size: 18px;
      width: 290px;
      height: 50px;
      padding-left: 10px;
      border: none;
    }
    .btnContainer {
      display: flex;
      justify-content: space-between;
      width: 300px;
      button {
        font-family: Questrial;
        font-size: 20px;
        height: 50px;
        width: 135px;
        border: none;
        border-radius: 10px;
        &:hover {
          opacity: 0.5;
          transition: 0.2s;
        }
      }
      .logIn {
        background-color: #ea5455;
        color: #ffffff;
      }
      .signUp {
        color: #2d4059;
        background-color: #e5e5e5;
      }
    }
    .google {
      height: 55px;
      width: 300px;
      &:hover {
        opacity: 0.5;
        transition: 0.2s;
      }
    }
  }
`;

export default form;
