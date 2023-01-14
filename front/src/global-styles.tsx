import styled, { createGlobalStyle } from "styled-components";
import back from "./assets/back.jpg";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  ::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${back});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    filter: blur(4px);
    z-index: -1;
  }
`;
