import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Vijay Sahu Quiz';
  constructor(private route: Router) { }
  ngOnInit() {

  }

  onClick() {
    console.log('start the quiz');
    this.route.navigate(['quiz']);
  }
}

