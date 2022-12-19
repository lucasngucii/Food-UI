import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  @Input() rating: number = 0;
  cropWidth: number = 75;
  constructor() {}

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }

  ngOnInit(): void {}
}
