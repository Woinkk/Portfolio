import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SchoolPathComponent } from './components/school-path/school-path.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'career',
        component: SchoolPathComponent
      },
    ]
  },
  {
    path: 'blog', 
    loadChildren: () => import('./blog/blog-routing.module').then(m => m.BlogRoutingModule)
  },
  {
    path: 'skills', 
    loadChildren: () => import('./skills/skills-routing.module').then(m => m.SkillsRoutingModule)
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
