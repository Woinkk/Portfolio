import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, UrlSegment } from '@angular/router';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  progress: number = 0;
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

    this.download();
  }

  download() {
    const totalSize = 100000000; //10000000; // 10 MB
    const chunkSize = 1000000; // 10 KB
    const numChunks = totalSize / chunkSize;
    let currentChunk = 0;

    const simulateDownload = () => {
      setTimeout(() => {
        currentChunk++;
        const progress = Math.round((100 * currentChunk) / numChunks);
        this.progress = progress;
        if (currentChunk < numChunks) {
          simulateDownload();
        }
      }, 10);
    };

    simulateDownload();
  }

}
