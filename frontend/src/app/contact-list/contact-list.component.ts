import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Contact } from "../contact";

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  displayedColumns : string[] = ['name', 'email', 'country', 'title', 'actions'];
  dataSource = [];

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit() {
    this.apiService.getContacts().subscribe((res)=>{
      console.log(res.body);
      this.dataSource = res.body;
    })
  }


  previousPage(){
    this.apiService.getContacts(this.apiService.prev).subscribe((res)=>{
      console.log(res.body);
      this.dataSource = res.body;
    })    
  }

  nextPage(){
    this.apiService.getContacts(this.apiService.next).subscribe((res)=>{
      console.log(res.body);
      this.dataSource = res.body;
    })
  }

  firstPage(){
    this.apiService.getContacts(this.apiService.first).subscribe((res)=>{
      console.log(res.body);
      this.dataSource = res.body;
    })
  }

  lastPage(){
    this.apiService.getContacts(this.apiService.last).subscribe((res)=>{
      console.log(res.body);
      this.dataSource = res.body;
    })
  }

  openDialog(contact: Contact): void {
    console.log(contact);
    const dialogRef = this.dialog.open(ContactDetailComponent, {
      width: '400px',
      data: contact
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
