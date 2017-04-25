import {Hot} from './hot';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HotTrevelService{
	constructor(private http:Http){}
	items : Hot[]=[];
	getData(): Observable<Hot[]>{
		return this.http.get('app/hot.json')
							.map((resp:Response)=>{
								
								let hotsList=resp.json().data;
								//let hots:Hot[]=[];
								for(let index in hotsList){
									let hot=hotsList[index];
									this.items[index]=new Hot(hot.url, hot.name, hot.cost);
									
								}
								//this.items=hots;
								return this.items;
							}
							);
	};
	
	addData(url:string, name: string, cost: number, updateHot:Hot){
	   
	if(updateHot!=null){	
		let elem=this.items.indexOf(updateHot);
		this.items[elem].url=url;
		this.items[elem].name=name;
		this.items[elem].cost=cost;
		updateHot=null;
		
		}else{
		this.items.push(new Hot(url,name,cost));
		}
		
    }
	deleteDate(item:Hot){
		this.items.splice(this.items.indexOf(item),1);
	}
}