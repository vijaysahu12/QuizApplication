import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [HttpClientModule]
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    const httpClient = fixture.debugElement.injector.get(HttpClientModule);
    expect(component).toBeTruthy();
  });
});
