import React from "react";
import { Shift } from "@/model/shift";
import * as S from "./style";
import dayjs from "dayjs";

export interface ShiftBoxProps {
  shift: Shift;
  onClick: Function;
  selected: boolean;
  disabled: boolean;
}

const ShiftBox = ({ shift, onClick, selected, disabled }: ShiftBoxProps) => {
  const { shift_id, shift_date, end_time, start_time, facility } = shift;
  const { facility_name } = facility;
  const formatTime = (time: string) => dayjs(new Date("1990/1/1 " + time)).format("h:mm A")

  const startTime = formatTime(start_time)
  const endTime = formatTime(end_time)

  return (
    <S.Box onClick={() => !disabled ? onClick(shift_id) : () => {}} selected={selected} disabled={disabled}>
      <div>{facility_name}</div>
      <div>{shift_date}</div>
      <div style={{ whiteSpace: "nowrap"}}>
        {startTime} - {endTime}
      </div>
    </S.Box>
  );
};

export default ShiftBox;
