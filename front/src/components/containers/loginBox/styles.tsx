import styled, { keyframes } from "styled-components";

const ContainerAnimation = keyframes`
  0%{
    top: -250px;
    opacity: 0;
    transform: scale(0.5) ;
  }
  100%{
    top: 0px;
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

export const Container = styled.div`
  background: linear-gradient(to bottom left, #002c46, #1ba2a1);
  background-color: #002c46;
  font-size: 14px;
  width: 425px;
  height: 450px;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "arial";
  border: 1px solid #002c46;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 7px 7px 10px 3px rgba(0, 0, 0, 0.4);
  animation: ${ContainerAnimation} 1s;
`;

export const ImageHolder = styled.div`
  margin-top: 50px;
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  > img {
    width: 80%;
  }
`;
