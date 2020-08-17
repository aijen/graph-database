import { createFeatureSelector } from '@ngrx/store';
import { ScheduleState } from './schedule.model';

export const ScheduleStateSelector = createFeatureSelector<ScheduleState>('schedule');