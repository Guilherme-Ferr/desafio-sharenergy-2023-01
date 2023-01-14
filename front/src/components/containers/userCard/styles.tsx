import styled from "styled-components";

export const Container = styled.div`
  background-color: #00ffff57;
  font-size: 14px;
  width: 1395px;
  height: auto;
  padding-top: 15px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  font-family: "arial";
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.4);
`;

export const List = styled.div`
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  height: auto;
`;

export const UserListTitle = styled.h1`
  font-size: 34px;
  margin-bottom: 20px;
  margin-left: 20px;
  color: yellow;
  text-shadow: 0 0 3px #00000075, 0 0 5px #00000075;
`;

export const UserListContainer = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const OtherOptions = styled.div`
  background-color: rgba(0, 44, 70);
  width: 100%;
  height: 100px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const CardsOptions = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #00ffff57;
  color: yellow;
  width: 250px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition-duration: 0.2s;

  :hover {
    cursor: pointer;
    background-color: rgba(0, 44, 70, 0.8);
    color: white;
    transition-duration: 0.2s;
  }
`;
