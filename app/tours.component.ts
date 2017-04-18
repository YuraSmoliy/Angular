import { Component, OnInit} from '@angular/core';
import { Tour } from './tour';
import { ToursService } from './Tours.service';

@Component({
    selector: 'tours-app',
	templateUrl: 'app/tours.component.html',
	styleUrls: ['app/tours.component.css'],
	providers: [ToursService]
})
export class ToursComponent implements OnInit { 

	items : Tour[]=[];
	
	constructor( private toursService:ToursService){}
	
	addItem(url:string, name: string, cost: number){
         
        this.toursService.addData(url, name, cost);
    }
	
    ngOnInit(){
        this.items = this.toursService.getData();
    }
}