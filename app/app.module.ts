import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HederComponent }  from './heder.component';
import { HotComponent }  from './hot.component';
import { FooterComponent }  from './footer.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, HederComponent, HotComponent, FooterComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }