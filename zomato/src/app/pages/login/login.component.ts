import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login :FormGroup
  httpClient: any;
 
  constructor(private builder:FormBuilder,private masterdata:MasterService,private route:Router){
    this.login=builder.group({
        "userName": ["Ajay",[Validators.required]],
        "password": ["Appu@0123",[Validators.required]]
    })
  }
  
 
  onSubmit() {
    if (this.login.valid) {
    
      const formData = new FormData();
      formData.append('userName', this.login.get('userName')?.value);
      formData.append('password', this.login.get('password')?.value);

      const postData ={
        "userName": "string",
        "password": "string"
      }
      
      const apiEndpoint = this.masterdata.login(postData).subscribe(
        (response: any) => {
          console.log('POST request successful', response);
          localStorage.setItem("ZomatoUser",JSON.stringify(response.data))
          this.route.navigateByUrl("/categories")
        },
        (error: any) => {
          console.error('Error in POST request', error);
        }
      );
    }
  }
  
}
