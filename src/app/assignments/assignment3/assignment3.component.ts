import { Component } from '@angular/core';
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component {
  // size
  fontsize:string='10px';
  s1:string='25px'; 
  s2:string='50px'; 
  s3:string='100px';
  s4:string='125px'; 
  s5:string='150px';
  fontSize(event:string){
    this.fontsize =event;
  }

  // note

  note:string='';
  addnote(event:string){
    this.note =event.toUpperCase();
  }






}
