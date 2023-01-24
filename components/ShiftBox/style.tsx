import styled, { StyledComponent } from "styled-components";
import { ShiftBoxProps } from "@/components/ShiftBox/index";

export const Box: StyledComponent<any, any> = styled.div<ShiftBoxProps>`
  width: 25%;
  padding: 10px 5px;
  margin: 10px;
  height: 100%;
  text-align: center;
  background: ${props => props.disabled ? "gray" : props.selected ? "cornflowerblue" : "transparent"};

  :hover {
    background: cornflowerblue;
    cursor: pointer;
  }
`;
