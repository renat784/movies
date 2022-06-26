import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  logo = '../../../../assets/images/the_movies_logo.jpg';

  constructor() {}

  ngOnInit(): void {}
}
