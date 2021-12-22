import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchForm = new FormGroup({
    keyword: new FormControl(''),
    find: new FormControl('book'),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const searchFormValues = this.searchForm.value;
    this.router.navigateByUrl(`/search/${searchFormValues.find}/${searchFormValues.keyword}`);
  }
}
