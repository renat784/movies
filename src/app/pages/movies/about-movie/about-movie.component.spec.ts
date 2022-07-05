import { Movie } from './../movie/models/movie.model';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MoviesService } from 'src/app/shared/services';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AboutMovieComponent } from './about-movie.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

fdescribe('AboutMovieComponent', () => {
  let component: AboutMovieComponent;
  let fixture: ComponentFixture<AboutMovieComponent>;
  let service: MoviesService;
  let movie = {} as Observable<Movie>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: MoviesService, useValue: {} }], // don't use real object - only useValue: {}
      declarations: [AboutMovieComponent],
      imports: [RouterTestingModule, HttpClientTestingModule], // testing version - not real one
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMovieComponent);
    component = fixture.componentInstance;
  });

  function getWrapperDebugElement(selector: string): DebugElement {
    return fixture.debugElement.query(By.css(selector));
  }

  it("div.no_movie should be if we DON'T HAVE movie", () => {
    fixture.detectChanges();
    expect(getWrapperDebugElement('div.no_movie')).toBeTruthy();
  });

  it('app-movie should be if we HAVE movie', () => {
    component.movie = of({} as Movie);
    // wdwdwdw
    fixture.detectChanges();
    expect(getWrapperDebugElement('app-movie')).toBeTruthy();
  });
});
