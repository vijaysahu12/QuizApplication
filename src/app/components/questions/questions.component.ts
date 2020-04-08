import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/modal/modal';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  QuizList: Quiz[] = [];
  QuizAnsweredList: any[] = [];
  QuizQuestion: Quiz = { Id: 0, Question: '', Answer: '', Options: null };
  selectedValue: '';
  isQuizDone = false;
  QuizResult = '';

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.GetNextQuestion();
  }
  CanDeactivate(): boolean {
    if (!this.isQuizDone) {
      return confirm('Do you want to leave Quiz?');
    } else {
      return true;
    }
  }
  GetNextQuestion() {
    if (this.QuizQuestion.Id > 0) {
      this.SaveQuizAnswer(this.QuizQuestion.Id);
    }
    this.selectedValue = '';
    this.questionService.GetNextQuestion(this.QuizQuestion.Id).subscribe(res => {
      this.QuizQuestion = res[0];
    });
  }

  SaveQuizAnswer(quizId: number) {
    this.QuizAnsweredList.push({
      Answer: this.selectedValue,
      Id: quizId
    });
  }

  ResetData() {
    this.QuizAnsweredList = [];
  }

  SubmitQuiz() {
    this.isQuizDone = true;
    this.SaveQuizAnswer(this.QuizQuestion.Id);
    this.questionService.GetQuizScore(this.QuizAnsweredList);
  }
  // To Handle the Radio event
  OptionChangeHandler(event: any) {
    this.selectedValue = event.target.value;
  }
}
