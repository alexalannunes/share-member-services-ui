import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  flex-direction: column;
  padding: 0 30px;
`;

export const BackButton = styled.button`
  padding: 20px;
  border-radius: 10px;
  background: #777ae8;
  color: #fff;
  font-weight: bold;
  border: none;
  margin-top: 100px;
  font-size: 20px;
  width: 100px;
  outline: none;
  cursor: pointer;
  box-shadow: 1px 15px 20px rgba(0, 0, 0, 0.2);

  &:active {
    box-shadow: none;
    background: #77afff;
  }
`;
