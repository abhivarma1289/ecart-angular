import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.scss']
})
export class Assignment2Component {
searchtext: string='' ;
clickred:string='red' ;
clickgreen:string='green' ;
displaytext:string='' ;
onSearchTextChanged(event: any) {
  this.displaytext=event.target.value
  this.searchtext=event.target.value;
}
onclickred() {
  this.displaytext='clicked on red button'
  this.searchtext=this.clickred;
}

onclickgreen() {
  this.displaytext='clicked on green button'
  this.searchtext=this.clickgreen;
}


// form functions

firstName :string='' ;
lastName :string='' ;
email :string='' ;
password :string='' ;
formdetails() {
  if (this.firstName && this.lastName && this.email && this.password) {
    alert(`Name: ${this.firstName} ${this.lastName}\nEmail: ${this.email}\nPassword: ${this.password}`);
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  } else {
    alert('Please fill al the fields');
  }
}
}
