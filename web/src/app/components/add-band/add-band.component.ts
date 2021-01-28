import { Component, OnInit } from '@angular/core';
import { BandsDataService } from '../../services/bands-data.service';
import { Band } from '../../models/band';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.scss']
})
export class AddBandComponent implements OnInit {

  newBand: Band;

  arrayBands: any;


  constructor(private dataService: BandsDataService,
    public dialogRef: MatDialogRef<AddBandComponent>) {

    this.arrayBands = this.dataService.getBands()
      .subscribe((data: any) => {
        this.arrayBands = data.results;
      })
  }


  ngOnInit(): void {
    this.newBand = new Band('', '', '');

  }


  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    else {
      this.dataService.postNewBands(this.newBand)
        .subscribe()
      this.dialogRef.close();
    }
    location.reload();
  }

}
