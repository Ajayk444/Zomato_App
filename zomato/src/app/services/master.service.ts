import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getallFoodCategories(){
    return this.http.get("http://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory")
  }

  getallRestaturnats(name: any){
    return this.http.get("http://freeapi.miniprojectideas.com/api/zomato/GetAllMenu",name)
  }
  
  login(obj:any){
    return this.http.post("http://freeapi.miniprojectideas.com/api/zomato/Login",obj)
  }
}
