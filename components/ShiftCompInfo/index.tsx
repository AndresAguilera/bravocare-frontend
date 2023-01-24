import React from "react";
import * as S from "./style"

interface ShiftCompInfoProps {
  shifts: string[]
}


const ShiftCompInfo = ({ shifts }: ShiftCompInfoProps) => {
  const disabled = shifts.length !== 2
  return (
    <S.Container>
      <div >
        <div>Overlap Minutes: </div>
        <div>Max overlap Threshold: </div>
        <div>Exceeds Overlap Threshold: </div>
      </div>
      <button disabled={disabled} onClick={() => console.log("Mutation")}>Compare Shifts</button>
    </S.Container>
  );
};

export default ShiftCompInfo;
