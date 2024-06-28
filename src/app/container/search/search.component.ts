import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchtext: string='';

// passing data between non-related components here from serach component to container component
// using custom event binding pass data from serach component to container component
// STEP 1: creater an event 
@Output()
  SearchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    // this.SearchTextChanged.emit(this.searchtext);
  }

  // updatesearchtext(event: any) {
  //   this.searchtext=event.target.value;
  // }


  // using templete reference variable to update search
//   here we have used #searchInput templete reference variable(TRV) created at input feild where this
//   TRV store the reference event ,and we passed  TRV as an argument to the function 
//   updatesearchtext() and accessed in that function ,
//    To avoid or without passing as an argument we can aceess the value directly using ViewChild()
//    Decorater ,to that VIewChild() funvction we need to pass a the TRV as a string argument and therewe store the value in some comnst 
//    variable and we can accesss that element 
// (i).is the first menthoid using passinhg the TRV as an argument to the function
// (ii).with Viewchild( '') decorater function

// <!-- (i) -->
// <!-- .<button class="bnt btn-search"  (click)="updatesearchtext(searchInput)">Search</button>  -->
// below function passing the TRV
// updatesearchtext(inputEL :HTMLInputElement) {
  //    // console.log(inputEL.value);
  //     this.searchtext=inputEL.value;
  //     this.SearchTextChanged.emit(this.searchtext);
  //   }


// <!--  (ii)-->

// <!-- .<button class="bnt btn-search"  (click)="updatesearchtext()">Search</button> -->
  // below fntion without passing the TRV an using  viewchild function

  @ViewChild('searchInput') searchoinputEle: ElementRef;

updatesearchtext() {
     // console.log(inputEL.value);
      this.searchtext=this.searchoinputEle.nativeElement.value;
      this.SearchTextChanged.emit(this.searchtext);
    }

}
