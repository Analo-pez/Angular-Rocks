import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../../services/in-memory-data.service';

@Component({
  selector: 'app-list-bands',
  templateUrl: './list-bands.component.html',
  styleUrls: ['./list-bands.component.scss']
})
export class ListBandsComponent implements OnInit {

  rockBands: any = [{}];

  constructor() { }
  // private bandsService: InMemoryDataService

  ngOnInit(): void {
    console.log(this.rockBands)
  }

}
