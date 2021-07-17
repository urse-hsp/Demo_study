import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public list: any[] = [];

  constructor(public router: Router) {}

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.list.push(`这是第${i}条数据`);
    }
  }

  toContent(): void {
    this.router.navigate(['/news/content', 1]);
  }
  toContent2(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: { id: 123 },
      fragment: 'anchor',
    };
    this.router.navigate(['/news/content'], navigationExtras);
  }
}
