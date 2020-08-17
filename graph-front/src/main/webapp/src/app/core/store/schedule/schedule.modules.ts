import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SchedulesReducer } from './schedule.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ScheduleEffects } from './schedule.effects';

@NgModule({
    imports: [
        StoreModule.forFeature('schedule', SchedulesReducer),
        EffectsModule.forFeature([ScheduleEffects])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class ScheduleStoreModule { }
