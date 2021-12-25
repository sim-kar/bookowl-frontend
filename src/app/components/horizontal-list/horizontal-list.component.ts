import { Component, Input, OnInit } from '@angular/core';
import { AggregatedBook } from '../../interfaces/aggregated-book';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.css', '../../../assets/styles/page-width.css'],
})
export class HorizontalListComponent implements OnInit {
  @Input() list: AggregatedBook[] = [];
  @Input() header: string = '';
  imageHeight: number = 192;

  constructor() { }

  ngOnInit(): void {
  }
}
