import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandsDataService } from '../../services/bands-data.service';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss']
})
export class BandDetailComponent implements OnInit {

  bandId: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: BandsDataService
  ) {
    this.route.params.subscribe(params => {
      console.log(params)
      this.service.getOneBand(params.id).subscribe(data => {
        this.bandId = data;
      })
    })

  }

  ngOnInit(): void {

  }

}
