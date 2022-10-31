import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = '';
  cardNumber: number = 0;
  expiryMonth: number = 0;
  expiryYear: number = 0;
  securityCode: string = '';
  
}
