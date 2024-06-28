import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
// direct propert declatation

  // name:string='One Plus Node CE 5G'
  // price:number=999
  // color:string='red'

name:string = 'Abhi varma Dongari'
cartvalue:number = 0;
  product={
    name:'One Plus Node CE 5G',
    price:999,
    color:'red',
    discount:10,
    instock:3,
    image:'/assets/images/nodece.jpg'
  }


  getDiscountPrice(){
    return this.product.price-this.product.discount *this.product.price/100
  }

  onNameChange(event: any){
    this.name=event.target.value
  }
  incrementcartvalue(){
    if(this.cartvalue<this.product.instock)
    this.cartvalue++;
  }
  decrementcartvalue(){
    if(this.cartvalue>0)
    this.cartvalue--;
  }
  

  // Rename 'string' to 'stringList' or any other meaningful name
 stringList: string[] = ['abhi', 'varma', 'dongari'];

 searchText:string = '';
 
 setSerachText(text:string){
  this.searchText = text;
 }



 @ViewChild(ProductListComponent) ProductListComponent: ProductListComponent ;
}
