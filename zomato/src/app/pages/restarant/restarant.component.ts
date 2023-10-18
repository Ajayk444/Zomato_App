import { Component,Input,OnInit,NgModule  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-restarant',
  templateUrl: './restarant.component.html',
  styleUrls: ['./restarant.component.css']
})
export class RestarantComponent {
  data:any[]=[]
  quantity:any 
  stringdata:any
  sampleresponce:any
  itemdetails:any[]=[]
  filteredData: any[]=[];

 constructor(private activeroute:ActivatedRoute, private masterdata:MasterService){
  this.activeroute.paramMap.subscribe((params)=>{
    var idsParam:any = params.get('categoryName');
    this.getRestaurantByName(idsParam)
    
    console.log("String data " ,idsParam)  
  })
 }
 getRestaurantByName(idsParam: string) {
  this.masterdata.getallRestaturnats(idsParam).subscribe((response: any) => {
    this.data = response.data;
    console.log("Restaurant Data", this.data); 
    this.filteredData = [];
      for (const item of this.data) {
        if (item.categoryName === idsParam) {
          this.filteredData.push(item);
        }
      }
      console.log("Filtered Data 1", this.filteredData); 
  });
}
openModal(sample:any){                                                               
 const model =document.getElementById("myModal");
 if (model !=  null){
  model.style.display ="block"
 }
}
closeModal(){                                                               
  const model =document.getElementById("myModal");
  if (model !=  null){
   model.style.display ="none"
  }
 }
addItemToCart(){

}


}
