import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillPageComponent } from './pages/skill-page/skill-page.component';

const routes: Routes = [
  {
    path: '',
    component: SkillPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
