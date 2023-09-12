import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  Subject,
  map,
  shareReplay,
  skip,
  skipUntil,
  skipWhile,
  startWith,
  switchMap,
  takeLast,
  takeUntil,
  timer,
} from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  query: string = '';

  constructor(public service: EmployeeService) {}

  searchQuery: Subject<Event> = new Subject<Event>();

  getAllEmployeeData = () => {
    this.service.getAllEmployeeDetails().subscribe({
      next: (res) => {
        this.service.employees = res.employees;
        console.log(res.message);
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  ngOnInit() {
    this.getAllEmployeeData();
    // this.searchQuery
    //   .pipe(
    //     skipUntil(timer(2000)),
    //     switchMap(() => this.service.getSearchResults(this.query)),
    //     shareReplay({ bufferSize: 1, refCount: true })
    //   )
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //     },
    //     error: (error) => {
    //       console.log(error);
    //     },
    //   });
    // this.searchQuery.subscribe((x) => console.log(x, this.query));
    this.searchQuery
      .pipe(
        switchMap(() =>
          timer(200).pipe(
            switchMap(() =>
              this.query !== ''
                ? this.service.getSearchResults(this.query)
                : this.service.getAllEmployeeDetails()
            )
          )
        )
      )
      .subscribe({
        next: (res) => {
          this.service.employees = res.employees;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  showEditModal(employee: Employee) {
    this.service.selectedEmployee = JSON.parse(JSON.stringify(employee));
    this.service.editModal = true;
  }

  showAddModel() {
    this.service.addModal = true;
  }

  onDelete(id: number) {
    if (confirm('Do you want to delete this record?')) {
      this.service.deleteEmployee(id).subscribe({
        next: (res) => {
          console.log(res.message);
          this.employees.filter((e) => e.id === id);
          this.getAllEmployeeData();
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
