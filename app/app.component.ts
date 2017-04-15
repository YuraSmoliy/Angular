import { Component } from '@angular/core';   
import { HederComponent }  from './heder.component';
import { HotComponent }  from './hot.component';
import { FooterComponent }  from './footer.component';
@Component({
    selector: 'my-app',
    template: `
				<heder-app></heder-app>
				<hot-app></hot-app>
				<label>Введите имя:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Добро пожаловать {{name}}!</h1>
				 <footer-app></footer-app>
				 `,
	styles: [`h2, p {color:#333;}`]
				
})
export class AppComponent { 
    name= '';
}
