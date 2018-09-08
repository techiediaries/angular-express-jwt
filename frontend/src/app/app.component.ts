import { Component , OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  constructor(private apiService: ApiService, private jwtService: JwtService, private router: Router){}
  ngOnInit(){
    this.apiService.getContacts().subscribe((res)=>{
      console.log(res.body);
      this.apiService.getContacts(this.apiService.next).subscribe((res)=>{
        console.log(res.body);
      });      
    });

    var contact = {
      "id": 201,
      "firstName": "Ahmed",
      "lastName": "Bouchefra",
      "email": "ahmed.bouchefra@gmail.com",
      "phone": "(387) 592-6773",
      "city": "Agadir",
      "country": "Morrocco",
      "title": "Developer"
    }

    this.apiService.createContact(contact).subscribe((res)=>{
      console.log("Created a contact");
    });

    var contact ={
      "id": 1,
      "firstName": "Ahmed",
      "lastName": "Bouchefra",
      "email": "ahmed.bouchefra@gmail.com",
      "phone": "(387) 592-6773",
      "city": "Agadir",
      "country": "Morrocco",
      "title": "Developer"
    }

    this.apiService.updateContact(contact).subscribe((res)=>{
      console.log("Updated the contact");
    });
    
    this.apiService.deleteContact(201).subscribe((res)=>{
      console.log("Deleted a contact");
    });
  }

  logOut(){
    this.jwtService.logout();
    this.router.navigate(['login']);
  }
}
