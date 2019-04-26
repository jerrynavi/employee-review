import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.sass']
})
export class AddEmployeeComponent implements OnInit {

  employee: any = {
    name: '',
    department: '',
  };
  employees: any = [];
  prompt = 'waiting';
  constructor() { }

  ngOnInit(): void {
    this.employee = new FormGroup({
      name: new FormControl(this.employee.name, [
        Validators.required,
      ]),
      department: new FormControl(this.employee.department, [
        Validators.required,
      ])
    });

  }

  saveEmployee() {
    console.log(this.employees);

    const newEmployee = {
      name: this.employee.name,
      department: this.employee.department
    };

    this.employees = localStorage.getItem('employees');

    if (this.employees) {
      this.employees = JSON.parse(this.employees);
      this.employees.unshift(newEmployee);
      this.employees = JSON.stringify(this.employees);
    } else {
      this.employees = [];
      this.employees.push(newEmployee);
      this.employees = JSON.stringify(this.employees);
    }

    localStorage.setItem('employees', this.employees);

    this.prompt = `${newEmployee.name} added successfully`;
  }

}
