import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Schedule} from "../../module/schedule";
import {ADMIN_SCHEDULE_LISTE} from "../../constants/http.constants";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private request: HttpClient) { }

  getSchedules(): Observable<any>{
    // @ts-ignore
    return this.request.get(ADMIN_SCHEDULE_LISTE)
  }
}
