import React from "react";
import { useMutation } from "@tanstack/react-query";
import { getShiftsOverlap } from "@/data/api/shifts";

const useOverlappingShifts = () => {
  return useMutation(getShiftsOverlap);
};

export default useOverlappingShifts;
