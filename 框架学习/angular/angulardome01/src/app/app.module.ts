// 跟组件 angular的跟模块，告诉anglular如何组装应用

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpserviceService } from './servivrd/httpservice.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './papes/home/home.component';
import { HeadComponent } from './papes/head/head.component';
import { FormComponent } from './components/form/form.component';

// 引入并且配置服务
import { StorageService } from './services/storage.service';
import { NewsComponent } from './papes/news/news.component';
import { TransitionComponent } from './papes/transition/transition.component';

// @NgModule装修器  ,@NgModule接收一个屋数据对象，告诉，angular如歌编译和启用引用
@NgModule({
  declarations: [
    // 配置当前项目运行的组件
    AppComponent,
    HomeComponent,
    HeadComponent,
    FormComponent,
    NewsComponent,
    TransitionComponent,
  ],
  imports: [
    // 配置当前模块运行依赖的其他模块
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [StorageService, HttpserviceService], // 配置项目所需要的服务
  bootstrap: [AppComponent], // 启动的组件，这里一般是写跟组件
})
// 跟模块不需要导出任何东西，因为其他组件不需要导入跟模块
export class AppModule {}
