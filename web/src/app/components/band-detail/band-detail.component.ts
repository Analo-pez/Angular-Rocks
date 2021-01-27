import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandsDataService } from '../../services/bands-data.service';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss']
})
export class BandDetailComponent implements OnInit {

  @Input() bandId: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: BandsDataService
  ) {
    this.route.params.subscribe(params => {
      this.bandId = this.service.getBands().subscribe(data => {
        this.bandId = data.results[params['id'] - 1];
        // provisional hasta arreglar index
      })
    })

  }

  ngOnInit(): void {

  }

}
