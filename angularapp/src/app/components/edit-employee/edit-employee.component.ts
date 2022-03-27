import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin/admin.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  // emp={
  //   id:null,
  //   active:null,
  //   email:null,
  //   mobileNumber:null,
  //   password:null,
  //   role:null,
  //   username:null,
  // };
  pass='';
  pass_match=true;
  constructor(public dialog:MatDialog,private snack:MatSnackBar,private adminService:AdminService, @Inject(MAT_DIALOG_DATA) public emp:any) { }

  ngOnInit(): void {
  }
  close()
  {
    this.dialog.closeAll();
  }
 formSubmit(){
  if(this.emp.username==''|| this.emp.username==null || this.emp.email==''|| this.emp.email==null)
  {
    this.snack.open("Mandatory fields cannot be empty","ok",{
      duration:3000,
    });
    return; 
  }
  if(this.emp.password!=this.pass)
  {
    this.pass_match=false;
    this.snack.open("Passwords Don't Match","OK");
  }
  this.adminService.updateEmployees(this.emp).subscribe(
    (data)=>{
      console.log(data);
      
    },
  (error)=>{
    this.snack.open("Updated Successfully","OK",{
      duration:3000
    });
    this.adminService.setAllEmployees();
    this.dialog.closeAll();
  }
  )
 }
}