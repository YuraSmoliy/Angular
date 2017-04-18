import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HederComponent }  from './heder.component';
import { HotComponent }  from './hot.component';
import { ToursComponent } from './tours.component';
import { ContactComponent }  from './contact.component';
import { FooterComponent }  from './footer.component';
import { HoverDirective } from './hover.directive';
import { ReactiveFormsModule }   from '@angular/forms';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, HederComponent, HotComponent, ToursComponent,ContactComponent, FooterComponent, HoverDirective, ReactiveFormsModule ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }