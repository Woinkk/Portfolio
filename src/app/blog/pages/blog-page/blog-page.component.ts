import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { ArticleService } from 'src/app/shared/service/article.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.less']
})
export class BlogPageComponent implements OnInit {

  currentArticle: Article | null = null;

  pageType: string | null = 'réalisations';

  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.unsetArticle();
    
    this._articleService.articleObservable$.subscribe(article => {
      this.currentArticle = article;
    })
  }

  selectArticle(articleName: string) {
    this._articleService.setArticle(articleName);
  }

  unsetArticle() {
    this._articleService.unsetArticle();
  }

}
