import React from "react";
import * as S from "./style";
import useShiftOverlap from "@/hooks/mutations/useOverlappingShifts";

interface ShiftCompInfoProps {
  shifts: string[];
}

const ShiftCompInfo = ({ shifts }: ShiftCompInfoProps) => {
  const mutation = useShiftOverlap();
  const disabled = shifts.length !== 2;

  return (
    <S.Container>
      <div>
        <div>Overlap Minutes: {mutation.data?.overlap_minutes}</div>
        <div>Max overlap Threshold: {mutation.data?.max_overlap_threshold}</div>
        <div>
          Exceeds Overlap Threshold:{" "}
          {mutation.data?.exceeds_overlap_threshold.toString()}
        </div>
      </div>
      <button
        disabled={disabled}
        onClick={() =>
          mutation.mutate({
            shift1_id: shifts[0],
            shift2_id: shifts[1],
          })
        }
      >
        Compare Shifts
      </button>
    </S.Container>
  );
};

export default ShiftCompInfo;
