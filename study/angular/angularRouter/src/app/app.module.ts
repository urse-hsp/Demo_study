import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { MyComponent } from './pages/my/my.component';
import { NewsContentComponent } from './pages/news-content/news-content.component';
import { An1Component } from './component/pages/home/an1/an1.component';
import { An2Component } from './pages/home/a/an2/an2.component';
import { Bn1Component } from './pages/home/b/bn1/bn1.component';
import { Bn2Component } from './pages/home/b/bn2/bn2.component';
import { AComponent } from './pages/home/a/a.component';
import { BComponent } from './pages/home/b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    MyComponent,
    NewsContentComponent,
    An1Component,
    An2Component,
    Bn1Component,
    Bn2Component,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
