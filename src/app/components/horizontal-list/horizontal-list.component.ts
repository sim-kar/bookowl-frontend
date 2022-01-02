import { Component, Input, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
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
  style: string = '';
  // pagination
  p: number = 1;
  id: string = '';

  ngOnInit(): void {
    // generate unique id for each pagination instance
    this.id = uuid();
  }

  ngOnChange() {

  }

  /* Updates pagination number and style of paginated list depending on number of entries on page */
  onPageChange(page: number) {
    this.p = page;

    // set style for list that is less than max entries
    if (this.list.length < this.maxEntries) {
      this.style = 'entries';
      return;
    }

    const pages = Math.ceil(this.list.length / this.maxEntries);

    // set style for paginated list page with max number of entries, i.e. all but last page
    if (page < pages) {
      this.style = 'entries-max';
      return;
    }

    // set style for paginated list's last page with max number of entries
    if (this.list.length / pages === this.maxEntries) {
      this.style = 'max-entries';
      return;
    }

    this.style = 'entries';
  }
}
