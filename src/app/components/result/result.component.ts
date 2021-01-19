import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
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
      this.band = this.service.getId(params['id'])
    })
  }

  ngOnInit(): void {
  }

  deleteCard() {
    // let index = 0;
    // for (let b of this.band) {
    //   if (b.id == this.band.id) {
    //     this.band[index].splice(index, 1);
    //   }
    //   index++;
    // }
    // this.band = this.band.splice(index, 1)
    console.log('delete')

  }
}