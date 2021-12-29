import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.css', '../../../assets/styles/page-width.css'],
})
export class HorizontalListComponent implements OnInit {
  @Input() list: Book[] = [];
  @Input() header: string = '';
  imageHeight: number = 192;
  maxEntries: number = 8;

  ngOnInit(): void {
  }
}
