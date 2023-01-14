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

export const FormLogin = styled.form`
  animation: ${ContainerAnimation} 1s;
`;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: center;
  align-items: center;
`;
