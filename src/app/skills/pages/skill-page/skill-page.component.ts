import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { Skill } from 'src/app/shared/models/skill.model';
import { ArticleService } from 'src/app/shared/service/article.service';

@Component({
  selector: 'app-skill-page',
  templateUrl: './skill-page.component.html',
  styleUrls: ['./skill-page.component.less']
})
export class SkillPageComponent implements OnInit, OnDestroy {

  currentSkill: Article | null = null;
  skillListSelected: Skill[] | null = null;

  pageType: string | null = 'compétences';

  hardSkills: Skill[] = [{name:"Angular", folderName:"Angular"}, {name:"C#", folderName:"CSharp"}, {name:"EF6/SQL Server", folderName:"EF6/SQLServer"}];
  softSkills: Skill[] = [{name:"Flexibilité", folderName:"Flexibilité"}, {name:"Autonomie", folderName:"Autonomie"}, {name:"Esprit d'équipe", folderName:"Espritdequipe"}];

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
