import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss']
})
export class BandDetailComponent implements OnInit {

  videoUrl: string = 'https://www.youtube.com/embed/SdpGG0V93Eo';

  constructor() { }

  ngOnInit(): void {
  }

}
