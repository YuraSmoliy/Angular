import { Component, OnInit} from '@angular/core';
import { Hot } from './hot';
import { HotTrevelService } from './hot-trevel.service';

@Component({
    selector: 'hot-app',
	templateUrl: 'app/hot.component.html',
	styleUrls: ['app/hot.component.css']
	//providers: [HotTrevelService]
})
export class HotComponent implements OnInit { 
	date: any;
	dateBook:Date;

	items : Hot[]=[];
	elem:Hot;
	displayBuyForm :boolean=false;
	
	constructor( private hotTrevelService:HotTrevelService){}
	
	/*addItem(url:string, name: string, cost: number){
         
        this.hotTrevelService.addData(url, name, cost);
    }*/
	
    ngOnInit(){
        this.hotTrevelService.getData().subscribe((data)=>this.items=data);
    };
	createBuyForm(item:Hot){
		this.elem=item;
		this.displayBuyForm=true;
	
	}
	canselBuy(){
		this.displayBuyForm=false;
	}
	bookHotTour(){
		
		this.canselBuy();
	   this.dateBook=new Date(Date.parse(this.date));
		alert(this.dateBook);
		
	}
}