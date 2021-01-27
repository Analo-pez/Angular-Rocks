import { Component, OnInit } from '@angular/core';
import { BandsDataService } from '../../services/bands-data.service';
import { Band } from '../../models/band';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AddBandComponent } from '../add-band/add-band.component';


@Component({
  selector: 'app-list-bands',
  templateUrl: './list-bands.component.html',
  providers: [BandsDataService]
})
export class ListBandsComponent implements OnInit {
  bands: Band[];


  constructor(private dataService: BandsDataService,
    private dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    this.bands = this.dataService.getBands()
      .subscribe((data: any) => {
        this.bands = data.results;
      })
  }


  createBand() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(AddBandComponent, dialogConfig)

  }


  deleteCard(i: number) {
    this.bands = this.bands.filter(listFromData => listFromData.id !== i);
    // localStorage.setItem('data', JSON.stringify(this.bands));
  }
}


