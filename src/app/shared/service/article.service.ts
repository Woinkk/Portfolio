import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  private _articleSubject: Subject<Article | null> = new BehaviorSubject<Article | null>(null);
  public articleObservable$: Observable<Article | null>;

  private _skillSubject: Subject<Article | null> = new BehaviorSubject<Article | null>(null);
  public skillObservable$: Observable<Article | null>;

  constructor(
    private _httpClient: HttpClient
  ) { 
    this.articleObservable$ = this._articleSubject.asObservable();
    this.skillObservable$ = this._skillSubject.asObservable();
  }


  public setArticle(articleName: string): void {
    this.setArticleSubject(articleName);
  }

  private setArticleSubject(articleName: string): void {
    const url = `./assets/articles/${articleName}/content.json`
    this._httpClient.get<Article>(url).subscribe((article) => {
     this._articleSubject.next(article);
    });
  }

  public unsetArticle(): void {
    this._articleSubject.next(null);
  }

  public setSkill(skillName: string): void {
    console.log(skillName);
    
    this.setSkillSubject(skillName);
  }

  setSkillSubject(skillName: string) {
    const url = `./assets/articles/${skillName}/content.json`
    this._httpClient.get<Article>(url).subscribe((skill) => {
     this._skillSubject.next(skill);
    });
  }

  public unsetSkill(): void {
    this._skillSubject.next(null);
  }
}
