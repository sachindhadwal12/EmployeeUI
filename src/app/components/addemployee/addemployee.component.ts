import { Component, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {AddEmployee} from '../../model/AddEmployee';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  addEmployees:AddEmployee
  formGroupDirective: FormGroupDirective;
  constructor() {
  }
  addEmployee:FormGroup
 genderList:string[] = ['M','F','O'];
 employeeLevel:number[]=[1,2,3,4,5,6,7];
 bloodGroup:string[]=['A+','B+','O+','A-','B-','AB+']
  ngOnInit(): void {
  }

}
