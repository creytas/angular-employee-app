import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  changePage(direction:string) {
    console.log('Changing page to ' + direction);
  }

  view() {
    console.log('Viewing employee details');
  }

  edit() {
    console.log('Editing employee details');
  }

  delete() {
    console.log('Deleting employee details');
  }

  close() {
    console.log('Closing the employee registration page');
  }

  add() {
    console.log('Adding a new employee');
  }

  export() {
    console.log('Exporting employee data to CSV');
  }
}
