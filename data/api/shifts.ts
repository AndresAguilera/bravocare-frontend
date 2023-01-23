import axios from "axios";

export const getAllShifts = () => {
    return axios.get("http://localhost:3000/shifts/").then(res => res.data).catch(err => console.log(err))
};
