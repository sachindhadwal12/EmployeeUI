import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) {


   }

   getEmpHistory():Observable<any>{
    return this.http.get('http://localhost:8081/api/v1/employeehistory');
  }
  getHistory(id:number):Observable<any>{
    return this.http.get(`http://localhost:8081/api/v1/employeehistory/${id}`);
  }
  getAllEmployee():Observable<any>{
    return this.http.get('http://localhost:8080/api/v1/employees');
  }
  getAllByGender(val):Observable<any>{
  return this.http.get(`http://localhost:8080/api/v1/employees/gender/${val}`)
  }

}
