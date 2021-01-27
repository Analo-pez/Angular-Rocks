import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandsDataService } from '../../services/bands-data.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() band: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: BandsDataService
  ) {
    this.route.params.subscribe(params => {
      this.band = this.service.getBands();
    })
  }

  ngOnInit(): void {
  }


}