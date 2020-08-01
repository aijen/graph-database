import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Schedule} from "../module/schedule";
import {ADMIN_SCHDULE_LISTE} from "./url.setting";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private request: HttpClient) { }

  getSchedules(): Observable<any>{
    // @ts-ignore
    return this.request.get(ADMIN_SCHDULE_LISTE)
  }
}
