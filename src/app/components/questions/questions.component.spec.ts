import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionsComponent } from './questions.component';
import { QuestionService } from 'src/app/services/question.service';
import { HttpClient } from '@angular/common/http';

describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsComponent ],
      // providers: [QuestionService]
    }).compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(QuestionsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  fit('should create', () => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    expect(component.ngOnInit());
    expect(component.selectedValue).toBe('');
    expect(component.QuizQuestion.Id).toBeGreaterThan(0);
  });

});
