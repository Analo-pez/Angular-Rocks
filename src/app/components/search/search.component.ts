import { Component, OnInit } from '@angular/core';
import { BandsDataService } from '../../services/bands-data.service';
import { Band } from '../../models/band';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  bands: Band[];

  constructor(private dataService: BandsDataService,
    private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    this.bands = this.dataService.getBand();
    // this.router.navigate(['app-search']);
    console.log('hola')
  }

}
