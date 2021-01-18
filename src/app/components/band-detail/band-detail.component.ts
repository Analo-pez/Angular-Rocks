import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandsDataService } from '../../services/bands-data.service';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss']
})
export class BandDetailComponent implements OnInit {

  bandId: any = [];

  // videoUrl: string = 'https://www.youtube.com/embed/SdpGG0V93Eo';

  constructor(
    private route: ActivatedRoute,
    private service: BandsDataService
  ) {
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.bandId = this.service.getId(params['id'])
    })
  }

  ngOnInit(): void {

  }

}
