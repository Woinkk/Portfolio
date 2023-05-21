import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { ArticleService } from 'src/app/shared/service/article.service';

@Component({
  selector: 'app-skill-page',
  templateUrl: './skill-page.component.html',
  styleUrls: ['./skill-page.component.less']
})
export class SkillPageComponent implements OnInit, OnDestroy {

  currentSkill: Article | null = null;
  skillListSelected: string[] | null = null;

  pageType: string | null = 'compétences';

  hardSkills: string[] = ["Angular", "CSharp"];
  softSkills: string[] = ["Flexibilité", "Autonomie", "Esprit d'équipe"];

  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this._articleService.skillObservable$.subscribe(skill => {
      this.currentSkill = skill;
    })
  }

  selectSkillPage(skillType: string): void {
    if(skillType === 'soft') {
      this.skillListSelected = this.softSkills;
    } else {
      this.skillListSelected = this.hardSkills;
    }
  }

  setSkill(skillName: string): void {
    this._articleService.setSkill(skillName);
  }

  unsetSkillList(): void {
    this.skillListSelected = null;
  }

  unsetSkill(): void {
    this._articleService.unsetSkill();
  }

  ngOnDestroy(): void {
    this._articleService.unsetSkill();
  }

}
