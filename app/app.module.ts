import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HederComponent }  from './heder.component';
import { HotComponent }  from './hot.component';
import { ToursComponent } from './tours.component';
import { ContactComponent }  from './contact.component';
import { AdminComponent }  from './admin.component';
import { FooterComponent }  from './footer.component';
import { HoverDirective } from './hover.directive';
import { HotTrevelService } from './hot-trevel.service';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes =[
{ path: '', component:HederComponent},
{ path: 'HotTours', component: HotComponent},
{ path: 'Tours', component: ToursComponent},
{ path: 'Contact', component:ContactComponent}
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, HederComponent, HotComponent, 
					ToursComponent,ContactComponent, FooterComponent, 
					HoverDirective,AdminComponent ],
	providers: 	  [HotTrevelService], 
    bootstrap:    [ AppComponent ]
})
export class AppModule { }