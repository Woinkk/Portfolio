import { Component, OnInit } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { NavigationService } from 'src/app/shared/service/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  currentRoute: UrlSegment[] = [];

  constructor(
    private _navigationService: NavigationService
  ) { 
    
  }

  ngOnInit(): void {
    this._navigationService.currentRoute$.subscribe((currentRoute) => {
      console.log(currentRoute);
      
      this.currentRoute = currentRoute;
    })
  }

  isSelected(path: string): boolean {
    let currentRouteLength = this.currentRoute.length - 1;
    let currentPath = this.currentRoute[currentRouteLength].path;
    if(path == currentPath) return true;
    else return false;
  }

}
