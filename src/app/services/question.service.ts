import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz, QuizAnswer } from '../modal/modal';
import { map } from 'rxjs/operators';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  QuizQuestion: Quiz = { Id: 0, Question: '', Answer: '', Options: null };
  constructor(private http: HttpClient, private sharedService: SharedService, private route: Router) { }

  // To Calculate the final score
  GetQuizScore(QuizAnsweredList: QuizAnswer[]) {
    this.GetQuizData().subscribe(res => {

      if (res.length > 0) {
        let countCorrectAnswer = 0;
        QuizAnsweredList.forEach(item => {
          if (res.filter(x => x.Id === item.Id && x.Answer === item.Answer)[0]) {
            countCorrectAnswer += 1;
          }
        });
        this.sharedService.SetSaveResult(parseInt((countCorrectAnswer * 100 / res.length).toString(), 10) + '%');
        this.route.navigate(['result']);
      }
    });

  }
  // Get question one by one using Index parameter
  GetNextQuestion(QuizId: number): Observable<any> {
    return this.GetQuizData()
      .pipe(map((reports: Quiz[]) => reports.filter(p => p.Id === QuizId + 1)));
  }

  // Assuemed that we have database where we have below 5 questions
  // If we have database then we can shift this code to a seprate service and using HttpClientModule we can get the data from server.
  GetQuizData(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>('../../assets/Quiz.data.json');
  }
}
