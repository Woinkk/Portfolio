import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { HeaderComponent } from '../components/header/header.component';
import { AppModule } from '../app.module';
import { ArticleComponent } from '../shared/components/article/article.component';


@NgModule({
  declarations: [
    BlogPageComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    AppModule
  ]
})
export class BlogModule { }
