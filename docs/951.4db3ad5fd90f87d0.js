"use strict";(self.webpackChunkPortfolio=self.webpackChunkPortfolio||[]).push([[951],{8951:(L,a,o)=>{o.r(a),o.d(a,{SkillsRoutingModule:()=>x});var r=o(820),t=o(8274),k=o(1045),u=o(6895),d=o(3646),m=o(5382),p=o(4859);function _(l,i){if(1&l){const e=t.EpF();t.TgZ(0,"button",2),t.NdJ("click",function(){const c=t.CHM(e).$implicit,b=t.oxw();return t.KtG(b.emitSelectedSkill(c))}),t._uU(1),t.qZA()}if(2&l){const e=i.$implicit;t.xp6(1),t.Oqu(e.name)}}let S=(()=>{class l{constructor(){this.skillList=null,this.skillListStatus=new t.vpe(!1),this.skillSelected=new t.vpe}ngOnInit(){}emitUnsetSkill(){this.skillListStatus.emit(!0)}emitSelectedSkill(e){this.skillSelected.emit(e.folderName)}}return l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-skill-list"]],inputs:{skillList:"skillList"},outputs:{skillListStatus:"skillListStatus",skillSelected:"skillSelected"},decls:6,vars:1,consts:[[1,"skill-list-container"],[1,"back"],["mat-flat-button","",3,"click"],[1,"skill-container"],["mat-flat-button","",3,"click",4,"ngFor","ngForOf"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return n.emitUnsetSkill()}),t._uU(3,"Retour"),t.qZA()(),t.TgZ(4,"div",3),t.YNc(5,_,2,1,"button",4),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",n.skillList))},dependencies:[u.sg,p.lW],styles:[".skill-list-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:space-around;min-width:100%}.skill-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%;align-items:center;justify-content:space-around}button[_ngcontent-%COMP%]{color:#000;background-color:#828df8;width:10%}.skill-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{color:#b0c2eb;background-color:#182542;width:25%;height:10%;font-size:3vh}.back[_ngcontent-%COMP%]{padding-left:5%}"]}),l})();function g(l,i){if(1&l){const e=t.EpF();t.TgZ(0,"div",6)(1,"button",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.selectSkillPage("hard"))}),t._uU(2,"Comp\xe9tences techniques"),t.qZA(),t.TgZ(3,"button",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.selectSkillPage("soft"))}),t._uU(4,"Comp\xe9tences transverses"),t.qZA()()}}function f(l,i){if(1&l){const e=t.EpF();t.TgZ(0,"app-skill-list",8),t.NdJ("skillSelected",function(s){t.CHM(e);const c=t.oxw(2);return t.KtG(c.setSkill(s))})("skillListStatus",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.unsetSkillList())}),t.qZA()}if(2&l){const e=t.oxw(2);t.Q6J("skillList",e.skillListSelected)}}function h(l,i){if(1&l&&(t.TgZ(0,"div",2)(1,"div",3),t._uU(2," Mes comp\xe9tences "),t.qZA(),t.YNc(3,g,5,0,"div",4),t.YNc(4,f,1,1,"ng-template",null,5,t.W1O),t.qZA()),2&l){const e=t.MAs(5),n=t.oxw();t.xp6(3),t.Q6J("ngIf",null==n.skillListSelected)("ngIfElse",e)}}function C(l,i){if(1&l){const e=t.EpF();t.TgZ(0,"app-article",9),t.NdJ("blogStatus",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.unsetSkill())}),t.qZA()}if(2&l){const e=t.oxw();t.Q6J("content",e.currentSkill)("pageType",e.pageType)}}const v=[{path:"",component:(()=>{class l{constructor(e){this._articleService=e,this.currentSkill=null,this.skillListSelected=null,this.pageType="comp\xe9tences",this.hardSkills=[{name:"Angular",folderName:"Angular"},{name:"C#",folderName:"CSharp"},{name:"EF6/SQL Server",folderName:"EF6/SQLServer"}],this.softSkills=[{name:"Flexibilit\xe9",folderName:"Flexibilit\xe9"},{name:"Autonomie",folderName:"Autonomie"},{name:"Esprit d'\xe9quipe",folderName:"Espritdequipe"}]}ngOnInit(){this._articleService.skillObservable$.subscribe(e=>{this.currentSkill=e})}selectSkillPage(e){this.skillListSelected="soft"===e?this.softSkills:this.hardSkills}setSkill(e){this._articleService.setSkill(e)}unsetSkillList(){this.skillListSelected=null}unsetSkill(){this._articleService.unsetSkill()}ngOnDestroy(){this._articleService.unsetSkill()}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(k.n))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-skill-page"]],decls:3,vars:2,consts:[["class","skill-container",4,"ngIf"],[3,"content","pageType","blogStatus",4,"ngIf"],[1,"skill-container"],[1,"skill-container-title"],["class","skill-selection",4,"ngIf","ngIfElse"],["skillList",""],[1,"skill-selection"],["mat-flat-button","",3,"click"],[1,"skill-selection",3,"skillList","skillSelected","skillListStatus"],[3,"content","pageType","blogStatus"]],template:function(e,n){1&e&&(t._UZ(0,"app-header"),t.YNc(1,h,6,2,"div",0),t.YNc(2,C,1,2,"app-article",1)),2&e&&(t.xp6(1),t.Q6J("ngIf",null==n.currentSkill),t.xp6(1),t.Q6J("ngIf",null!=n.currentSkill))},dependencies:[u.O5,d.G,m.t,p.lW,S],styles:["*[_ngcontent-%COMP%]{color:#b0c2eb}.skill-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:92vh}.skill-container-title[_ngcontent-%COMP%]{padding:50px;justify-self:center;align-self:center;font-size:5vh}button[_ngcontent-%COMP%]{color:#b0c2eb;background-color:#182542;width:25%;height:10%;font-size:3vh}.skill-selection[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%;align-items:center;justify-content:space-around;padding:50px}"]}),l})()}];let x=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[r.Bz.forChild(v),r.Bz]}),l})()}}]);