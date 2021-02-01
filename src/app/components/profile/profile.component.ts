import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/users-data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any = {};

  constructor(
    private dataService: UserDataService,
  ) {

    //EJEMPLO SI SE RECOGE EL ID DEL LOGIN, EN ESTE CASO ID=1
    this.dataService.getOneUser(1).subscribe(data => {
      this.user = data;
    })
  }

  ngOnInit(): void {


  }

}
