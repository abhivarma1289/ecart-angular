import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input()
  all:number=0;

  @Input()
  inStock:number = 0;

  @Input()
  outOfstock:number = 0;
   
  

  @Output()
  selectedFilterRadioButtonchanged: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton:string='all';

  onselectedFilterRadioButtonchanged(){
  //  console.log('selectedFilterRadioButtonchanged eevent fired')
  
    this.selectedFilterRadioButtonchanged.emit(this.selectedFilterRadioButton)
  }
}
