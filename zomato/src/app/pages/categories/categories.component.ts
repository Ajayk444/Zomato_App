import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categories:any[]=[];

  constructor(private masterService:MasterService,private route:Router){}

  ngOnInit(): void {
    this.loadallfoodcategories()
  }

  loadallfoodcategories(){
    this.masterService.getallFoodCategories().subscribe((res:any) =>{
    this.categories=res.data;
    console.log ("Categories",this.categories)
    });
    
  }
  navigate(item:any){
   this.route.navigate(["/restaurant",item.categoryName])
  }



}
