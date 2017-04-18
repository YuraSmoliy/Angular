import {Hot} from './hot';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HotTrevelService{
	constructor(private http:Http){}
	getData(): Observable<Hot[]>{
		return this.http.get('app/hot.json')
							.map((resp:Response)=>{
								
								let hotsList=resp.json().data;
								let hots:Hot[]=[];
								for(let index in hotsList){
									let hot=hotsList[index];
									hots.push({url:hot.url, name:hot.name, cost:hot.cost});
								}
								return hots;
							}
							);
	};
	addData(url:string, name: string, cost: number){
         
        this.data.push(new Hot(url, name, cost));
    }
}