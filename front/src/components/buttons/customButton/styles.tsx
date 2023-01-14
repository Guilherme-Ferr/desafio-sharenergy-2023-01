import styled from "styled-components";

export const ContainerButton = styled.button`
  border: 0px;
  width: 100%;
  height: 50px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 15px;
  text-transform: uppercase;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  box-shadow: 7px 7px 5px 2px rgba(0, 0, 0, 0.4);
  color: ${(props) => props.textColor};
  transition-duration: 0.2s;
  background-color: ${(props) => props.color};

  :hover {
    cursor: pointer;
  }

  :hover {
    background-color: rgba(0, 44, 70, 0.8);
    color: white;
    transition-duration: 0.2s;
  }
`;
