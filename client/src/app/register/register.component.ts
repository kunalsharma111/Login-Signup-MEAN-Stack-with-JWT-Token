import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(){}
  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile')
      },
      err => {
        console.error(err)
      }
    )
  }
}
