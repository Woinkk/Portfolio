import { Injectable } from '@angular/core';
import { NavigationEnd, Router, UrlSegment } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private currentRouteSubject: Subject<UrlSegment[]> = new BehaviorSubject<UrlSegment[]>([]);

  constructor(
    private _router: Router
  ) { 
    let segments = this._router.getCurrentNavigation()?.finalUrl?.root.children['primary'].segments;
    if(segments) {
      this.currentRouteSubject.next(segments);
    }

    // refresh current route
    this.refreshCurrentRoute();
  }

  private refreshCurrentRoute() {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let segments = this._router.getCurrentNavigation()?.finalUrl?.root.children['primary'].segments;
        if(segments) {
          this.currentRouteSubject.next(segments);
        }
      }
    })
  }

  get currentRoute$(): Observable<UrlSegment[]> {
    return this.currentRouteSubject.asObservable();
  }

}
