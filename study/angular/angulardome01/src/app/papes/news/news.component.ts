import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { HttpserviceService } from '../../servivrd/httpservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
})
export class NewsComponent implements OnInit {
  // 获取dom节点
  @ViewChild('myBox') myBox: any;
  @ViewChild('header') header: any;

  public title: string = '我是首页组件的标题';
  public list: any = [];
  constructor(public http: HttpClient, public axioss: HttpserviceService) {}

  runs() {
    console.log('子组件调用父组件方法');
  }

  runParent(content: string) {
    console.log('没事找事？');
    alert('没事找事？');
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.myBox.nativeElement);
    this.myBox.nativeElement.style.color = 'red';
    console.log(this.header.nativeElement, 'herader');
    this.header.run();
  }

  getData() {
    console.log('请求');
    let api =
      'https://www.fastmock.site/mock/bf8472e01c568d7c136e7ba95a7dd945/shop1/ap';
    this.http.get(api).subscribe((response) => {
      console.log(response);
      this.list = response.data;
    });
  }
  async getDataAxios() {
    const res = await this.axioss.axiosGet('https://www.fastmock.site/mock/bf8472e01c568d7c136e7ba95a7dd945/shop1/ap')
    console.log(res)
  }
}
