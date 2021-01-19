import { Component, OnInit } from '@angular/core';
import { BandsDataService } from '../../services/bands-data.service';
import { Band } from '../../models/band';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.scss']
})
export class AddBandComponent implements OnInit {

  bandsAdd: Band;

  arrayBands = [];


  constructor(private dataService: BandsDataService) {
    this.bandsAdd = JSON.parse(localStorage.getItem('band'));
  }


  ngOnInit(): void {
    this.bandsAdd = new Band();
    this.arrayBands;

  }


  onSubmit(form: NgForm) {
    localStorage.setItem('band', JSON.stringify(this.bandsAdd))
    this.arrayBands.push(this.bandsAdd)
    console.log(this.arrayBands)

  }

}
