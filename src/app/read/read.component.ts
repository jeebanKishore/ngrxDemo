import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  /**
   * Let's define an observable of type Tutorial collection
   * to be able to hold data from Store observable.
   */
  tutorials: Observable<Tutorial[]>;
/**
 * In either constructor or on ngOninit we have to listen to the store changes.
 * In view wher ever we use the holding variable need to use async pipe ( | async)
 * to be able to refresh data on updatation.
 * @param store : Type of Tutorial collection from app state
 */
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  delTutorial(index: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  ngOnInit() {
  }

}
