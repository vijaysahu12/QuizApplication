import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionsComponent } from '../components/questions/questions.component';

@Injectable({
    providedIn  : 'root'
})
export class AuthGuardDeactivate implements CanDeactivate<QuestionsComponent> {
    constructor() {}
    canDeactivate(
        component: QuestionsComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean  | Observable<boolean> | Promise<boolean> {
       return component.CanDeactivate();
    }
 
}