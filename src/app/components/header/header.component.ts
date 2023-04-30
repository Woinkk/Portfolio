import { Component, OnInit } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { NavigationService } from 'src/app/shared/service/navigation-service/navigation.service';

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
      this.currentRoute = currentRoute;
    })
  }

}
