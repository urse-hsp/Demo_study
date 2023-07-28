import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  // 定义一个属性
  public title = '我的插值表达式ts';
  // 默认是public
  title2 = '我的插是msg';
  // 定义数据建议制定类型
  username2: number = 123;

  public student: any = '你又知道了'; // any可以赋值任何类型

  /*
    声明属性的几种方式
    public   共有（默认） 可以在这个类里面使用，也可以在类外面使用
    protected  保护类型  他只有在当前类和她的子类型里面可以访问
    private   私有       只有在当前类才可以访问这个属性
  */
  username: any; // 不设置属性的话，任意值，到构造函数中可以去赋值

  public userInfo: any = {
    name: '张三',
  };

  public content: any = '<h1>模板</h1>';

  // 数组
  public Arrays: any[] = [
    // Array<any>
    { name: '张三1' },
    { name: '张三2' },
    { name: '张三3' },
    { name: '张三4' },
    { name: '张三5' },
  ];

  public flag: boolean = true;

  public orderStatus: number = 4; // 1支付

  public today: any = new Date();

  public keywords: any = 'z';

  constructor() {
    this.username = '哈皮'; // 给属性赋值也叫改变属性的值
    console.log(this.username);
  }

  ngOnInit(): void {}

  expression() {
    alert('执行方法');
  }

  keyDowns(event) {
    console.log(event.keyCode);
  }
  keyup(event) {
    console.log(event.keyCode);
  }
}
