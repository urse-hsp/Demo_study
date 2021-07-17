// 引入核心模块里面的Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 使用曾组件的名称
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angulardome01'; // 定义属性
  constructor() {} // 构造函数
}
