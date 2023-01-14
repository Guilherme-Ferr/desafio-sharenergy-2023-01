import styled from "styled-components";

export const Container = styled.div`
  background-color: #b1e2ff;
  font-size: 14px;
  width: 300px;
  height: 300px;
  display: flex;
  margin-right: 10px;
  margin-bottom: 10px;
  flex-direction: column;
  padding: 15px;
  font-family: "arial";
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.4);
  font-size: 18px;
`;

export const ImageHolder = styled.img`
  align-self: center;
  width: 230px;
  height: 180px;
  margin-bottom: 15px;
`;

export const Name = styled.div`
  align-self: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const NameHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Email = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
