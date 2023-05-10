import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  private _articleSubject: Subject<Article> = new BehaviorSubject<Article>({} as Article);
  public articleObservable$: Observable<Article> = new Observable<Article>();

  constructor(
    private _httpClient: HttpClient
  ) { }


  public setArticle(articleName: string): void {
    this.setArticleSubject(articleName);
  }

  private setArticleSubject(articleName: string): void {
    const url = `/assets/articles/${articleName}/content.html`
    this._httpClient.get<Article>(url).subscribe(article => {
     this._articleSubject.next(article);
    });
  }
}
