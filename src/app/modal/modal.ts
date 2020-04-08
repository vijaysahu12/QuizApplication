export class Quiz {
    Id: number;
    Question: string;
    Options: any[];
    Answer: string;

}

export class QuizOptions {
    Option: string;
    Code: string;
}

export class QuizAnswer {
    Answer: string;
    Id: number;
}

// To understand the three different state of UI (Quiz) ( Not Started , Started, Done)
export enum QuizStatus {
    No = 0,
    Yes = 1,
    Done = 2
  }