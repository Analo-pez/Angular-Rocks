import { Component } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/users-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  person: UserModel;
  userRegister: any;

  constructor(private router: Router,
    private dataService: UserDataService) {

  }
  ngOnInit() {
    this.person = new UserModel();

  }

  login(form: NgForm) {
    this.userRegister = this.dataService.postLogin(this.person)
      .subscribe((data: any) => {
        this.userRegister = data.user;
        if (this.person.password === this.userRegister.password && this.person.username === this.userRegister.username) {
          this.router.navigate(['app-list-bands']);
          console.log('tiene acceso')
        }
      })

    //NECESITO CONTROLAR EL ERROR Y MOSTRARLO

    // if (form.invalid) {
    //   return;
    // }
    // if (this.userRegister === null) {
    //   alert('No está en el registro')
    // }
    // if (this.person.password !== this.userRegister.password || this.person.username !== this.userRegister.username) {
    //   alert('Los datos introducidos no coinciden')
    // }
  }


}
