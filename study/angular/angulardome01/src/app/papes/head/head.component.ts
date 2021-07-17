import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { StorageService } from '../../services/storage.service';

// 不推荐这个写法，是可以用的
// const storage = new StorageService();
//  console.log(storage);

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.less'],
})
export class HeadComponent implements OnInit {
  @Input() title: string;
  @Input() runs: any;
  @Input() news: any;
  @Output() private outer = new EventEmitter();
  constructor(public storage: StorageService) {
    let s = this.storage.get();
    console.log(s);

    var rxjsData = this.storage.getRxjsData()
    rxjsData.subscribe((data)=>{
      console.log(data)
    })
  }

  ngOnInit(): void {
    let as = document.getElementById('box');
    as.style.color = 'red';
    // 原生js 获取节点， if的获取不到 。视图没有更新上
  }

  run() {
    console.log('我是头部');
  }

  sendParent() {
    alert('123');
    console.log(this.outer);
    this.outer.emit('我是子组件的数据2');
  }

  ngAfterViewInit(): void {
    console.log(this.title);
    this.runs();
    console.log(this.news.title, 'this');
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // let as = document.getElementById('box');
    // as.style.color = 'red';
  }
}
