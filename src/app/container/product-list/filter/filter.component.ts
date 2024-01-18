import { Component, EventEmitter, Input } from '@angular/core';

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
   
  selectedFilterRadioButton:string='all';

  selectedFilterRadioButtonchanged: EventEmitter<string> = new EventEmitter<string>();

  onselectedFilterRadioButtonchanged(){
    this.selectedFilterRadioButtonchanged.emit(this.selectedFilterRadioButton)
  }
}
