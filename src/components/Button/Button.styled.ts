import styled from "styled-components";

export const Styled = styled.button`
  width: 100%;
  color: white;
  background-color: #c41c1c;
  height: 40px;
  outline: 0px;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;
  &:hover {
    background-color: hsl(0, 92%, 34%);
  }
  &:active {
    background-color: #fff;
  }
`;
