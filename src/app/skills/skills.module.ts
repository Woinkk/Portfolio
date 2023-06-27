import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillPageComponent } from './pages/skill-page/skill-page.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    SkillPageComponent,
    SkillListComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    AppModule
  ]
})
export class SkillsModule { }
