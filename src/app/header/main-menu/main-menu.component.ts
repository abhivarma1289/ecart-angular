import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  headerItems: string[]=['Home', 'Products', 'About','Contact','Help','Exchange & Returns','Order Tracker','SignUp / Login']
}
