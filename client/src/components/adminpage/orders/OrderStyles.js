import styled from "styled-components";

const div = styled.div`
  font-family: Questrial;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  color: #e8e8e8;
  .listContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    background-color: #30475e;
    overflow-y: scroll;
    height: 500px;
    padding-top: 1%;
  }
  .listItem {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    height: 24px;
    .userId,
    .paymentStatus {
      width: 13%;
      text-align: center;
      display: flex;
      align-items: center;
      select {
        height: 20px;
        margin-left: 5px;
        background-color: #222831;
        color: #e8e8e8;
        border: none;
      }
    }
    .userEmail {
      width: 40%;
      text-align: center;
    }
    .orderTitle {
      color: #f05454;
      font-size: 22px;
    }
  }
  .odd {
    background-color: #222831;
  }
`;

export default div;
