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
	url:string="url";
	name:string="name";
	cost:number=0;
	updateHot:Hot=null;
	
	constructor( private hotTrevelService:HotTrevelService){}
	
    ngOnInit(){
        this.hotTrevelService.getData().subscribe((data)=>this.items=data);
    }
	addElem(url:string,name:string,cost:string){
		//if(this.updateHot!=null){	
		//this.updateHot.url=url;
		//this.updateHot.name=name;
		//this.updateHot.cost=cost;
		//this.updateHot=null;
		
		//}else{
		this.hotTrevelService.addData(url,name,+cost,this.updateHot);
		//}
		this.updateHot=null;
		this.url="url";
		this.name="name";
		this.cost=0;
	}
	deleteHotTour(item:Hot){
		
		this.hotTrevelService.deleteDate(item);
	}
	updeleteHotTour(item:Hot){
		this.url=item.url;
		this.name=item.name;
		this.cost=item.cost;
		this.updateHot=item;
		
	}

}