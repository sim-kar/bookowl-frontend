import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})

/** A search bar for finding books by title or author. */
export class SearchBarComponent {
  searchForm = new FormGroup({
    keyword: new FormControl(''),
    find: new FormControl('book'),
  });

  constructor(private router: Router) { }

  /** Navigate to search results page with parameters from form. */
  onSubmit(): void {
    const searchFormValues = this.searchForm.value;
    this.router.navigateByUrl(`/search/${searchFormValues.find}/${searchFormValues.keyword}`);
  }
}
