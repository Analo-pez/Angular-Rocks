import { Component } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/users-data.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    person: UserModel;

    constructor(private router: Router,
        private dataService: UserDataService) {

    }

    ngOnInit() {
        this.person = new UserModel();

    }


    onSubmit(form: NgForm) {
        // localStorage.setItem('usuario', JSON.stringify(this.person))
        if (form.invalid) {
            return;
        } else {
            this.dataService.postRegister(this.person)
                .subscribe()
            this.router.navigate(['app-login']);
        }
    }
}
