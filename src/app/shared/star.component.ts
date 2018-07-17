import { Component, OnChanges, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements  OnInit {
  
  @Input() rating: number;
  starWidth: number;
  ngOnInit(): void {
    if(this.rating < 2){
      this.starWidth = 1 * 75 / 5;
    }else
    this.starWidth = this.rating * 75 / 5;
  }
}
