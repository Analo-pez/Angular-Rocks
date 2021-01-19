import { Component, OnInit } from '@angular/core';
import { BandsDataService } from '../../services/bands-data.service';
import { Band } from '../../models/band';
import { NgForm } from '@angular/forms';
import { LocalstorageService } from '../../services/localstorage.service';



@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.scss']
})
export class AddBandComponent implements OnInit {

  bandsAdd: Band;

  arrayBands = [{
    name: "Dire Straits",
    description: "Big group, better musicians",
    link: "https://www.youtube.com/watch?v=8Pa9x9fZBtY"
  }];


  constructor(private dataService: BandsDataService,
    private localService: LocalstorageService) {

    this.bandsAdd = JSON.parse(localStorage.getItem('band'));
    console.log(this.bandsAdd)
  }


  ngOnInit(): void {
    this.bandsAdd = new Band();

  }


  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    else {
      this.localService.setLocal('band', this.bandsAdd);
      this.arrayBands.push(this.bandsAdd);
      console.log(this.arrayBands);
    }

  }

}
