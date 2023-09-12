import { Employee } from './employee';

export class EmployeeApi {
  message: string = '';
  employee: Employee = new Employee();
}

export class AllEmployeeApi {
  message: string = '';
  employees: Employee[] = [];
}
