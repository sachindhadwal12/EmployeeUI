import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../services/emp.service'
import {MatSnackBar} from '@angular/material/snack-bar';
import {Employee} from '../../model/employee'
import { from } from 'rxjs';
@Component({
  selector: 'app-emphistory',
  templateUrl: './emphistory.component.html',
  styleUrls: ['./emphistory.component.css']
})

export class EmphistoryComponent implements OnInit {



  empList:[];
  distinctThings
  distinctId;
  emp_id: any;
  employee:Employee
  constructor(private empService: EmpService, private _snackBar: MatSnackBar) {
    this.employee = new Employee();
   }


  ngOnInit() {

   this.empService.getEmpHistory().subscribe(resp=>{
     console.log(resp);
     this.empList=resp;
     this.distinctThings  = this.empList.filter(
      (thing, i, resp) => this.empList.findIndex( t => t.emp_id === thing.emp_id) === i
    )
    // this.distinctThings = (value, index, self) =>{
    //   return self.indexOf(value)===index;
    // }
    // this.distinctId = this.empList.filter(this.distinctThings);
    // this.distinctId = [...new Set(this.empList.map(x =>x.emp_id))];
  //   this.distinctId = Array.from(new Set(this.empList.map(s => s.emp_id)))
  //  .map(emp_id =>{
  //    return {
  //      emp_id:emp_id
  //    }
  //  })





   },err=>{
      this._snackBar.open('Error Occured !!!','',{
        duration: 8000
      })
   })
  }

  getEmpId(id){
    console.log(id);

    localStorage.setItem('empId',id);
  }

}

