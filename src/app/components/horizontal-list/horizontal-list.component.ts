import { Component, Input, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.css', '../../../assets/styles/page-width.css'],
})

/**
 * A horizontal list for displaying books. Can display 8 books at a time, but if there are more
 * books in the list it will paginate. Can be given a link for the header. If withState is set to
 * true the given list will be set as state for the link.
 */
export class HorizontalListComponent implements OnInit {
  @Input() list: Book[] = [];
  @Input() header: string = '';
  @Input() link: string | undefined;
  @Input() withState: boolean = false;
  imageHeight: number = 192;
  maxEntries: number = 8;
  style: string = '';
  // pagination
  p: number = 1;
  id: string = '';

  /**
   * Get a unique id for this horizontal list's pagination. It is needed if there is more than one
   * pagination component on a page.
   */
  ngOnInit(): void {
    this.id = uuid();
  }

  /**
   * Updates pagination page, and style of paginated list depending on number of entries on page.
   * If there are fewer than the maximum number of entries the entries will be justified left,
   * otherwise they will be spaced evenly in the available space.
   */
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
