import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empList=[];
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageEvent: PageEvent;
  activePageDataChunk:any = []
  sortedData:any[]
  public selectedName:any;

   isDisable = false;

  Gend:string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private empService: EmpService, private _snackBar: MatSnackBar ) {

  }
  gender =['M','F','O']

  search;

  ngOnInit(): void {
    this.empService.getAllEmployee().subscribe(resp =>{
       this.empList = resp;
       console.log(this.empList)
       this.activePageDataChunk = this.empList.slice(0,this.pageSize);

    })
  }

    setPageSizeOptions(setPageSizeOptionsInput: string) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }

    onPageChanged(e) {
      let firstCut = e.pageIndex * e.pageSize;
      let secondCut = firstCut + e.pageSize;
      this.activePageDataChunk = this.empList.slice(firstCut, secondCut);
    }
    selectChangeHandler(event: any){
  this.Gend = event.target.value;
    }
    searchData(){
      console.log(this.Gend);
      this.empService.getAllByGender(this.Gend).subscribe(resp =>{
        this.empList = resp;
        if(this.empList.length==0){
          this._snackBar.open('No Record Found','',{
            duration: 8000
          })
        }
      },
      err=>{
        this._snackBar.open('Error Occured !!!','',{
          duration: 8000
        })

    })
  }
  }









