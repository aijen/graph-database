import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects'
import { ScheduleService } from './schedule.service';
import { loadSchedule, ScheduleActionTypes, loadScheduleSuccess, LoadScheduleFailure } from './schedule.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleEffects {

  constructor(
    private actions$: Actions,
    private scheduleService: ScheduleService
  ) { }

  @Effect()
  load$ = this.actions$.pipe(
    ofType<loadSchedule>(ScheduleActionTypes.loadSchedule),
    switchMap(()=>this.scheduleService.getSchedules()),
    map(schedules => new loadScheduleSuccess({schedules})),
    catchError((error,caught)=>concat(of(new LoadScheduleFailure({error})), caught))
  )
}
