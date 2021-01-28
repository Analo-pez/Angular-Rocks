import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BandsDataService } from '../../services/bands-data.service';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() band: any = {};

  constructor(
    private service: BandsDataService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  deleteCard(id: number) {
    this.service.deleteBands(id)
      .subscribe();
    this.router.navigate(['app-list-bands']);

  }

}