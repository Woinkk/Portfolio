import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit, AfterViewInit {

  @Input() 
  content: Article = {} as Article;
  
  @Input()
  pageType: string | null = null;

  @Output()
  blogStatus: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() { }

  ngAfterViewInit(): void {
    document.getElementById('content')!.innerHTML = this.content.contentHtml;

    let pTags = document.getElementById('content')!.getElementsByTagName('p').length

    for (let i = 0; i < pTags - 1; i++) {
      const element = document.getElementById('content')!.getElementsByTagName('p').item(i);
      element!.style.width = "100%";
    }
  }

  ngOnInit(): void {
    
  }

  unsetArticle() {
    this.blogStatus.emit(true);
  }

}
