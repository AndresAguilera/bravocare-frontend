import axios from "axios";

export const getAllShifts = () => {
  return axios
    .get("http://localhost:3000/shifts/")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getShiftsOverlap = (shifts: {
  shift1_id: string;
  shift2_id: string;
}) => {
  return axios
    .post("http://localhost:3000/shifts/overlap", shifts)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
