import { Component, OnInit } from '@angular/core';
import { BandsDataService } from '../../services/bands-data.service';
import { Band } from '../../models/band';


@Component({
  selector: 'app-list-bands',
  templateUrl: './list-bands.component.html',
  providers: [BandsDataService]
})
export class ListBandsComponent implements OnInit {
  bands: Band[];


  constructor(private dataService: BandsDataService) { }


  ngOnInit(): void {
    this.bands = this.dataService.getBand();
  }


}
