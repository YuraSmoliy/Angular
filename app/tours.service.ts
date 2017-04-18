import {Tour} from './tour';

export class ToursService{
	private data: Tour[]=[
	 {url:"green",name:"safsdf",cost:12},
	 {url:"green",name:"safsdf",cost:12}, 
	 {url:"green",name:"safsdf",cost:12}, 
	 {url:"green",name:"safsdf",cost:12}
	];
	getData(): Tour[]{
		return this.data;
	}
	addData(url:string, name: string, cost: number){
         
        this.data.push(new Tour(url, name, cost));
    }
}