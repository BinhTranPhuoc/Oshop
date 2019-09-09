import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<any>(); 
  constructor() { }
}
