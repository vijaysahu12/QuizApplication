import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ResultComponent } from './components/result/result.component';
import { AuthGuardDeactivate } from './services/auth.GuardDeactivate';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuestionsComponent , canDeactivate: [AuthGuardDeactivate] },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'ignore' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
