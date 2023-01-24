import React, { useState } from "react";
import { Shift } from "@/model/shift";
import * as S from "./style";
import ShiftBox from "@/components/ShiftBox";
import ShiftCompInfo from "@/components/ShiftCompInfo";
import useShifts from "@/hooks/queries/useShifts";

const ShiftGrid = () => {
  const { shifts, isLoading } = useShifts();
  const [selected, setSelected] = useState<string[]>([]);

  const isSelected = (id: string) => selected.includes(id)

  const onSelect = (id: string) => {
    if (isSelected(id))
      return setSelected(selected.filter((v: string) => v !== id));
    else setSelected([...selected, id]);
  };

  return (
    <>
      {isLoading && "Loading shifts..."}
      {!isLoading && (
        <>
          <ShiftCompInfo shifts={selected} />
          <S.Grid>
            {shifts.map((shift: Shift) => {
              return (
                <ShiftBox
                  shift={shift}
                  key={shift.shift_id}
                  onClick={onSelect}
                  selected={isSelected(shift.shift_id)}
                  disabled={selected.length === 2 && !isSelected(shift.shift_id)}
                />
              );
            })}
          </S.Grid>
        </>
      )}
    </>
  );
};

export default ShiftGrid;
