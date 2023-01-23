import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllShifts } from "@/data/api/shifts";

const useShifts = () => {
  const { data: shifts, ...queryData } = useQuery({
    queryKey: ["allShifts"],
    queryFn: () => getAllShifts(),
  });
  return { shifts, ...queryData };
};

export default useShifts;
