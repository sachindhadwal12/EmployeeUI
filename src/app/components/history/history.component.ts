import { Component, Input, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {



  empList:[];
  empId;
  constructor(private empService:EmpService) {

   }

  ngOnInit(){
   this.getEmployeeHistory();
  }

  getEmployeeHistory(){

    this.empId = localStorage.getItem('empId');
    console.log(this.empId);
   this.empService.getHistory(this.empId).subscribe(resp =>{
    console.log(resp);
    this.empList = resp;
   })
  }



}
