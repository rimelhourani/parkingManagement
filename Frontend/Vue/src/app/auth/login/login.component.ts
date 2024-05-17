import { Component } from '@angular/core';
import { User } from '../auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = {
    name: '',
    email: '',
    password: '',
    confirm: ''
  }
  users: any;


  constructor(public router: Router, private authService: AuthService) { }

  signin() {
    this.authService.login(this.user.email!, this.user.password!).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('access_token', data.token + '');
        // localStorage.setItem('currentUser', data.name + '')
        this.router.navigate(['/app']);
      }
    )
  }
}
