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

export const Title = styled.h1`
  font-size: 34px;
  margin-bottom: 20px;
  margin-left: 20px;
  color: yellow;
  text-shadow: 0 0 3px #00000075, 0 0 5px #00000075;
`;

export const CatsContainer = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
