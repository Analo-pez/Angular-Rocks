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

  newBand: Band;

  arrayBands = [{
    name: "Dire Straits",
    description: "Big group, better musicians",
    link: "https://www.youtube.com/watch?v=8Pa9x9fZBtY"
  }, {
    name: "Metallica",
    description: "Big group, better musicians",
    link: "https://www.youtube.com/watch?v=tAGnKpE4NCI"
  }];


  constructor(private dataService: BandsDataService,
    private localService: LocalstorageService) {

    this.newBand = JSON.parse(localStorage.getItem('band'));

  }


  ngOnInit(): void {
    this.newBand = new Band('', '', '');
    // this.newBand = this.localService.getLocal('band');
    console.log(this.newBand.id)
  }


  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    else {
      this.localService.setLocal('band', this.newBand);
      this.arrayBands.push(this.newBand);
      console.log(this.arrayBands);
    }

  }

}
