import { Component, OnInit } from '@angular/core';
import { BandsDataService } from '../../services/bands-data.service';
import { Band } from '../../models/band';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  bands: Band[];
  showPage = false;

  text = '';

  constructor(private dataService: BandsDataService) {
  }

  ngOnInit(): void {

    this.bands = this.dataService.getBand();
  }

  searchFunction(text: string) {
    this.showPage = true;
    this.bands = this.bands.filter(e => {
      return e.name.toLocaleLowerCase().includes(text)
        || e.name.toLowerCase().indexOf(text.toLowerCase()) >= 0;
    });
  }


}
