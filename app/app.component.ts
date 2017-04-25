import { Component } from '@angular/core';   
import { HederComponent }  from './heder.component';
import { HotComponent }  from './hot.component';
import { ToursComponent }  from './tours.component';
import { FooterComponent }  from './footer.component';
import { AdminComponent }  from './admin.component';
import { ContactComponent }  from './contact.component';
@Component({
    selector: 'my-app',
    template: `
				<heder-app></heder-app>
				<hot-app></hot-app>
				<tours-app></tours-app>
				<contact-app></contact-app>
				<admin-app></admin-app>
				 <footer-app></footer-app>
				 `,
	styles: [`h2, p {color:#333;}`]
				
})
export class AppComponent { 
    name= '';
}
