import React from "react";
import { Shift } from "@/model/shift";
import * as S from "./style";

export interface ShiftBoxProps {
  shift: Shift;
  onClick: Function;
  selected: boolean;
  disabled: boolean;
}

const ShiftBox = ({ shift, onClick, selected, disabled }: ShiftBoxProps) => {
  const { shift_id, shift_date, end_time, start_time, facility } = shift;
  const { facility_name } = facility;

  return (
    <S.Box onClick={() => !disabled ? onClick(shift_id) : () => {}} selected={selected} disabled={disabled}>
      <div>{facility_name}</div>
      <div>{shift_date}</div>
      <div style={{ whiteSpace: "nowrap"}}>
        {start_time} - {end_time}
      </div>
    </S.Box>
  );
};

export default ShiftBox;
