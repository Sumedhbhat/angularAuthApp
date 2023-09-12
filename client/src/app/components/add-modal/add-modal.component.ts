import { Component, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css'],
})
export class AddModalComponent {
  @Input() getAllEmployeeDetails: () => void = () => {};
  newEmployee: Employee = new Employee();
  openModal: boolean = false;
  constructor(public service: EmployeeService) {}

  closeAddModal() {
    this.newEmployee = new Employee();
    this.service.addModal = false;
  }

  addEmployee(form: NgForm) {
    if (form.valid) {
      this.service.createEmployee(this.newEmployee).subscribe({
        next: (res) => {
          this.newEmployee = new Employee();
          this.getAllEmployeeDetails();
          this.service.addModal = false;
          console.log(res.message);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
