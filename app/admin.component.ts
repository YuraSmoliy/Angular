import { Component, OnInit} from '@angular/core';
import { Hot } from './hot';
import { HotTrevelService } from './hot-trevel.service';
 
 
@Component({
    selector: 'admin-app',
	templateUrl: 'app/admin.component.html',
	styleUrls: ['app/admin.component.css']
   //providers: [HotTrevelService]
    
})
export class AdminComponent{ 
	items : Hot[]=[];
	
	constructor( private hotTrevelService:HotTrevelService){}
	
    ngOnInit(){
        this.hotTrevelService.getData().subscribe((data)=>this.items=data);
    }
	addElem(url:string,name:string,cost:string){
		this.hotTrevelService.addData(url,name,+cost);

	}
	deleteHotTour(item:Hot){
		
		this.hotTrevelService.deleteDate(item);
	}

}