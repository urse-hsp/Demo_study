import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss'],
})
export class NewsContentComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      console.log(data);
    });

    this.route.params.subscribe((data) => {
      console.log(data);
    });
  }
}
