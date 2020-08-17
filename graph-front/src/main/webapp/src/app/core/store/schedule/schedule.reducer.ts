import { ScheduleState } from './schedule.model';
import { ScheduleActionUnion, ScheduleActionTypes } from './schedule.action';

export const scheduleState : ScheduleState ={
    schedules: [],
    isLoading: false,
};

export function SchedulesReducer(
    state= scheduleState,
    action: ScheduleActionUnion
): ScheduleState{

    switch(action.type){
        case ScheduleActionTypes.loadSchedule: {
            return {
                ...state,
                isLoading: true
            };
        }

        case ScheduleActionTypes.loadScheduleSuccess: {
           const {schedules} = action.payload;
            return {
                ...state,
                schedules,
                isLoading: false
            };
        }
        case ScheduleActionTypes.loadScheduleFailure: {
             return {
                 ...state,
                 isLoading: false
             };
         }
         default: {
             return state;
         }
    }
}