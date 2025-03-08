import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Employee } from '../../model/Employee';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  router = inject(Router);
  user: Employee = new Employee(0, '', '', '', 0, '', '', '', new Date());
  onLogout() {
    localStorage.removeItem('employeeApp');
    this.router.navigateByUrl('login');
  }
  ngOnInit(): void {
    console.log('Layout Component is ready');
    this.user = JSON.parse(localStorage.getItem('employeeApp') || '{}');
  }
}
