import { Facility } from "@/model/facility";

export interface Shift {
    shift_id: string
    facility: Facility
    shift_date: string
    start_time: string
    end_time: string
}
