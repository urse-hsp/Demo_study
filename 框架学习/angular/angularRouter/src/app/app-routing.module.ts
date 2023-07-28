import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'a',
        component: AComponent,
        children: [
          { path: 'an1', component: An1Component },
          { path: 'an2', component: An2Component },
          { path: '**', redirectTo: 'an1' },
        ],
      },
      {
        path: 'b',
        component: BComponent,
        children: [
          { path: 'bn1', component: Bn1Component },
          { path: 'bn2', component: Bn2Component },
          { path: '**', redirectTo: 'bn1' },
        ],
      },
      { path: '**', redirectTo: 'a' },
    ],
  },
  { path: 'news', component: NewsComponent },
  { path: 'my', component: MyComponent },
  { path: 'news/content', component: NewsContentComponent },
  { path: 'news/content/:id', component: NewsContentComponent },
  { path: '**', redirectTo: 'home' }, // component: HomeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
