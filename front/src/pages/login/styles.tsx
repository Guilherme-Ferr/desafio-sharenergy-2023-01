import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputsHolder = styled.div`
  font-family: Arial;
  font-weight: bold;
  font-size: 14px;
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const ButtonLogin = styled.button`
  border: 0px;
  width: 100%;
  height: 50px;
  font-weight: bold;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  box-shadow: 7px 7px 5px 2px rgba(0, 0, 0, 0.4);
  color: #002c46;
  transition-duration: 0.2s;
  background-color: white;
  :hover {
    cursor: pointer;
  }

  :hover {
    background-color: rgba(0, 44, 70, 0.8);
    color: white;
    transition-duration: 0.2s;
  }
`;
