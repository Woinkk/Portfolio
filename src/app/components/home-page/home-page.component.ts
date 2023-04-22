import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, UrlSegment } from '@angular/router';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  currentRoute: UrlSegment[] = [];

  constructor(
    private _router: Router
  ) { 
    let segments = this._router.getCurrentNavigation()?.finalUrl?.root.children['primary'].segments;
    if(segments) {
      this.currentRoute = segments;
      console.log(this.currentRoute.length);
      
    }
  };

  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let segments = this._router.getCurrentNavigation()?.finalUrl?.root.children['primary'].segments;
        if(segments) {
          this.currentRoute = segments;
        }
      }
    })
  }

}
