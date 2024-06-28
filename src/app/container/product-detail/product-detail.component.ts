import { Component, Input } from '@angular/core';
import { product } from 'src/app/models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  
  @Input() productListComp:ProductListComponent=undefined;
  protect:product;
  product: product;
  ngOnInit() {
    this.product=this.productListComp.selectedproduct;
  }
}
