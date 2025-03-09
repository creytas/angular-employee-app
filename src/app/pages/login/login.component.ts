import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface LoginType {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginObj:LoginType = {
    username: '',
    password: ''
  }

  http = inject(HttpClient);
  router = inject(Router)

  onLogin() {
    debugger
    console.log(this.loginObj);
    this.http.post('http://projectapi.gerasim.in/api/EmployeeManagement/login', this.loginObj).subscribe((res:any) => {
      console.log(res);
      debugger
      if(res.result) {
        localStorage.setItem('employeeApp', JSON.stringify(res.data));
        this.router.navigateByUrl('dashboard');
      }else {
        alert(res.message);
      }
    });
  }

}
