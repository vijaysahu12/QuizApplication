import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private QuizResult = new BehaviorSubject(null);
  QuizResultObject = this.QuizResult.asObservable();
  constructor() { }

  SetSaveResult(value: string) {
    return this.QuizResult.next(value);
  }
}
