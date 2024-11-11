import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  text: string = '';
  constructor(private router: Router, private auth: AuthService) {}
  ngOnInit(): void {
    this.text = this.auth.login;
  }
  goToHome() {
    if (this.auth.login === 'Login') {
      console.log('hi');
      this.auth.login_check = true;
      this.auth.login = 'Logout';
      this.text = this.auth.login;
    } else {
      console.log('bye');
      this.auth.login = 'Login';
      this.auth.login_check = false;
      this.text = this.auth.login;

      this.router.navigate(['/']);
    }
  }
}
