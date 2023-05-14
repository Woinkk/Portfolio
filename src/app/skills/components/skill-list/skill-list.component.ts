import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.less']
})
export class SkillListComponent implements OnInit {

  @Input()
  skillList: string[] | null = null;

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

  emitSelectedSkill(skillName: string): void {
    this.skillSelected.emit(skillName);
  }

}
