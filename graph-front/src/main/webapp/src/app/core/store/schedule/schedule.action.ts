import { Action } from '@ngrx/store';
import { Schedule } from '../../module/schedule';

export enum ScheduleActionTypes{
    loadSchedule = '[Schedule] Load',
    loadScheduleSuccess = '[Schedule] LoadScheduleSuccess',
    loadScheduleFailure = '[Schedule] LoadScheduleFailure '

}

export class loadSchedule implements Action{

    readonly type = ScheduleActionTypes.loadSchedule;
    constructor(){}
}

export class loadScheduleSuccess implements Action{

    readonly type = ScheduleActionTypes.loadScheduleSuccess;
    constructor(public payload: {schedules: Schedule[]}){}
}

export class LoadScheduleFailure implements Action{

    readonly type = ScheduleActionTypes.loadScheduleFailure;
    constructor(public payload: {error: Error}){}
}

export type ScheduleActionUnion = | loadSchedule | loadScheduleSuccess | LoadScheduleFailure