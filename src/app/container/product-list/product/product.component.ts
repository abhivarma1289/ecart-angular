import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { product } from 'src/app/models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input()
  product:product;
}
