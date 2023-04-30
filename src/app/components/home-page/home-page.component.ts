import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, UrlSegment } from '@angular/router';
import { NavigationService } from 'src/app/shared/service/navigation-service/navigation.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  progress: number = 0;
  currentRoute: UrlSegment[] = [];

  constructor(
    private _navigationService: NavigationService
  ) { 
    
  };

  ngOnInit(): void {
    this._navigationService.currentRoute$.subscribe((currentRoute) => {
      this.currentRoute = currentRoute;
      console.log(this.currentRoute);
    });

    this.download();
  }

  download() {
    const totalSize = 1000000; //10000000; // 10 MB
    const chunkSize = 10000; // 10 KB
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
      }, 30);
    };

    simulateDownload();
  }
}
