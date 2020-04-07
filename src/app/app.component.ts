import { Component, OnInit } from '@angular/core';
import { Quiz } from './modal/modal';
import { trigger, state, style, transition, group, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        width: 220,
        transform: 'translateX(0)', opacity: 1
      })),
      transition('void => *', [
        style({ width: 350, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.7s 0.5s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('1s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.7s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.7s 0.5s ease', style({
            opacity: 0
          }))
        ])
      ])
    ]),
    trigger('shrinkOut', [
      state('in', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Vijay Sahu Quiz';
  QuizList: Quiz[] = [];
  QuizAnsweredList: any[] = [];
  QuizQuestion: Quiz = { Id: 0, Question: '', Answer: '', Options: null };
  QuizState = QuizStatus.No;
  selectedValue: '';
  isQuizDone = false;
  QuizResult = '';
  ngOnInit() {
    this.QuizData();
  }

  onClick() {
    console.log('start the quiz');
    this.QuizState = QuizStatus.Yes;
    this.GetNextQuestion(0);
  }

  // Get question one by one using Index parameter
  // If there is no quiz left then it will automatically dispaly the score on UI.
  GetNextQuestion(QuizId: number) {
    if (QuizId > 0) {
      this.QuizAnsweredList.push({
        Id: QuizId,
        Answer: this.selectedValue
      });
    }
    this.selectedValue = '';
    if (QuizId !== this.QuizList.length) {
      this.QuizQuestion = this.QuizList.filter(x => x.Id === QuizId + 1)[0];
    } else { this.GetQuizScore(); }
  }


  // To Handle the Radio event
  OptionChangeHandler(event: any) {
    this.selectedValue = event.target.value;
  }

  // To Calculate the final score
  GetQuizScore() {
    let countCorrectAnswer = 0;
    this.QuizAnsweredList.forEach(item => {
      if (this.QuizList.filter(x => x.Id === item.Id)[0].Answer === item.Answer) {
        countCorrectAnswer = countCorrectAnswer + 1;
      }
    });
    this.ResetData();
    this.QuizState = QuizStatus.Done;
    this.QuizResult = countCorrectAnswer * 100 / this.QuizList.length + '%';
  }

  ResetData() {
    this.QuizAnsweredList = [];
    this.selectedValue = '';
    this.QuizState = QuizStatus.No;
  }

  // Assuemed that we have database where we have below 5 questions
  // If we have database then we can shift this code to a seprate service and using HttpClientModule we can get the data from server.
  QuizData() {
    this.QuizList = [];
    this.QuizList.push({
      Id: 1,
      Answer: 'China',
      Options: ['India', 'USA', 'China', 'Russia'],
      Question: 'Which is the largest country in the world by population?'
    });

    this.QuizList.push({
      Id: 2,
      Answer: '1945',
      Options: ['1945', '1939', '1944', '1942'],
      Question: 'When did the second world war end?'
    });

    this.QuizList.push({
      Id: 3,
      Answer: 'China',
      Options: ['USA', 'France', 'Italy', 'China'],
      Question: 'Which was the first country to issue paper currency?'
    });

    this.QuizList.push({
      Id: 4,
      Answer: 'Atlanta',
      Options: ['Atlanta', 'Sydney', 'Athens', 'Beijing'],
      Question: 'Which city hosted the 1996 Summer Olympics?'
    });

    this.QuizList.push({
      Id: 5,
      Answer: 'Alexander Graham Bell',
      Options: ['Albert Einstein', 'Alexander Graham Bell', 'Isaac Newton', 'Marie Curie'],
      Question: 'Who invented telephone?'
    });
  }
}

// To understand the three different state of UI (Quiz) ( Not Started , Started, Done)
enum QuizStatus {
  No = 0,
  Yes = 1,
  Done = 2
}

