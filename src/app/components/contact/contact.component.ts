import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  subject: string = "";
  message: string = "";

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    if( this.firstName == "" || this.lastName == "" || this.subject == "" || this.message == "") {
      this._snackBar.open("Veuillez remplir tout les champs de contact.", "Fermer")
    } else {
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: 5 * 1000, // 5 seconds
      });
      this.firstName = "";
      this.lastName = "";
      this.subject = "";
      this.message = "";
    }
  }

}
