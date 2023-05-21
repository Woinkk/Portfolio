import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.less']
})
export class SkillListComponent implements OnInit {

  @Input()
  skillList: Skill[] | null = null;

  @Output()
  skillListStatus: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  @Output()
  skillSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitUnsetSkill(): void {
    this.skillListStatus.emit(true);
  }

  emitSelectedSkill(skill: Skill): void {
    this.skillSelected.emit(skill.folderName);
  }

}
