import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  Score: string;
  constructor(private readonly sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    this.sharedService.QuizResultObject.subscribe(res => {
      if (res === null) {
        this.router.navigate(['']);
      } else {
        this.Score = res;
      }
    });
  }
}
