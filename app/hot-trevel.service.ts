import {Hot} from './hot';

export class HotTrevelService{
	private data: Hot[]=[
	 {url:"\'app/berlin.jpg\'",name:"safsdf",cost:12},
	 {url:"\'app/egypt.jpg\'",name:"safsdf",cost:12}, 
	 {url:"\'app/barsik.jpg\'",name:"safsdf",cost:12}, 
	 {url:"\'app/carpath.jpg\'",name:"safsdf",cost:12}
	];
	getData(): Hot[]{
		return this.data;
	}
	addData(url:string, name: string, cost: number){
         
        this.data.push(new Hot(url, name, cost));
    }
}