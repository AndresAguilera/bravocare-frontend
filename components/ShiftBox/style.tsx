import styled, { StyledComponent } from "styled-components";
import { ShiftBoxProps } from "@/components/ShiftBox/index";

export const Box: StyledComponent<any, any> = styled.div<ShiftBoxProps>`
  width: 25%;
  padding: 10px 5px;
  margin: 10px;
  text-align: center;
  border: 1px solid dimgrey;
  border-radius: 2px;
  background: ${(props) =>
    props.disabled
      ? "gray"
      : props.selected
      ? "cornflowerblue"
      : "transparent"};

  :hover {
    cursor: pointer;
  }
`;
