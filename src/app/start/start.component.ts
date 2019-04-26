import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.sass']
})
export class StartComponent implements OnInit {
  /**
   * the employee object
   * @prop {number} employee.id employee id
   * @prop {string} employee.name Employee name
   * @prop {string} employee.department Employee's department
   * @prop {Object} employee.ratings the employee's ratings
   * @prop {boolean} employee.hasBeenRated has the employee been rated?
   * @prop {Object} employee.ratings.performance the employee's performance scores
   * @prop {Object} employee.ratings.potential the employee's potential scores
   * @prop {Object} employee.ratings.emotionalExpensiveness the employee's emotional expensiveness scores
   */
  employees: any;
  canShowEmployees = false;
  constructor() { }

  ngOnInit() {
    this.employees = localStorage.getItem('employees');
    this.showEmployees();
  }

  showEmployees() {
    if (this.employees && this.employees.length > 0) {
      this.canShowEmployees = true;
    }
    this.canShowEmployees = false;
  }

}
