import { Component, OnInit} from '@angular/core';
import { Hot } from './hot';
import { HotTrevelService } from './hot-trevel.service';

@Component({
    selector: 'hot-app',
	templateUrl: 'app/hot.component.html',
	styleUrls: ['app/hot.component.css'],
	providers: [HotTrevelService]
})
export class HotComponent implements OnInit { 

	items : Hot[]=[];
	
	constructor( private hotTrevelService:HotTrevelService){}
	
	/*addItem(url:string, name: string, cost: number){
         
        this.hotTrevelService.addData(url, name, cost);
    }*/
	
    ngOnInit(){
        this.hotTrevelService.getData().subscribe((data)=>this.items=data);
    }
}