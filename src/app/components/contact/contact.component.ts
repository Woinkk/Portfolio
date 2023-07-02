import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  firstName: string = "";
  mail: string = "";
  subject: string = "";
  message: string = "";
  linkedinIcon: string = "E:\dev\Perso\Woinkk.github.io\src\assets\icons8-linkedin.svg";

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _snackBar: MatSnackBar,
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) { 
    this.iconRegistry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/linkedinIcon.svg'));
  }

  ngOnInit(): void {
    
  }

  openSnackBar() {
    if( this.firstName == "" || this.mail == "" || this.subject == "" || this.message == "") {
      this._snackBar.open("Veuillez remplir tout les champs de contact.", "Fermer")
    } else {
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: 5 * 1000, // 5 seconds
      });
      this.firstName = "";
      this.mail = "";
      this.subject = "";
      this.message = "";
    }
  }

  goToUrl(): void {
    this.document.location.href = 'https://www.linkedin.com/in/spencer-galloni/';
}

}
