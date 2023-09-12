import { Component, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent {
  @Input()
  getAllEmployeeDetails: () => void = () => {};
  employee: Employee = new Employee();

  constructor(public service: EmployeeService) {}

  closeEditModal() {
    this.service.selectedEmployee = new Employee();
    this.service.editModal = false;
  }

  employeeUpdate(form: NgForm) {
    if (form.valid) {
      this.service.updateEmployeeDetails().subscribe({
        next: (res) => {
          this.service.selectedEmployee = new Employee();
          console.log(res.message);
          this.getAllEmployeeDetails();
          this.service.editModal = false;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
