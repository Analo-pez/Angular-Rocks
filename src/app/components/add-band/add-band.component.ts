import { Component, OnInit } from '@angular/core';
import { BandsDataService } from '../../services/bands-data.service';
import { Band } from '../../models/band';

@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.scss']
})
export class AddBandComponent implements OnInit {

  bands: Band[];


  constructor(private dataService: BandsDataService) { }


  ngOnInit(): void {
    this.bands = this.dataService.getBand();
  }
}
