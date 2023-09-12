import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { AllEmployeeApi, EmployeeApi } from '../models/employee-api';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(public http: HttpClient) {}
  employees: Employee[] = [];
  url: string = 'http://localhost:5225/api/employee/';
  editModal: boolean = false;
  selectedEmployee: Employee = new Employee();
  addModal: boolean = false;

  getAllEmployeeDetails(id?: number) {
    return this.http.get<AllEmployeeApi>(this.url);
  }

  getEmployeeDetail(id: number) {
    return this.http.get<EmployeeApi>(this.url + id);
  }

  getSearchResults(query: string) {
    return this.http.get<AllEmployeeApi>(this.url + `search?search=${query}`);
  }

  getOrderedResults(prop: string) {
    return this.http.get<AllEmployeeApi>(this.url + `order?prop=${prop}`);
  }

  updateEmployeeDetails() {
    return this.http.put<EmployeeApi>(this.url, this.selectedEmployee);
  }

  deleteEmployee(id: number) {
    return this.http.delete<EmployeeApi>(this.url + id);
  }

  createEmployee(employee: Employee) {
    return this.http.post<EmployeeApi>(this.url, employee);
  }
}
