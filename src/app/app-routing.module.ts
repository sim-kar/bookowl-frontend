import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import {
  SearchResultsPageComponent,
} from './components/search-results-page/search-results-page.component';
import {
  BooksPopularPageComponent,
} from './components/books-popular-page/books-popular-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'book/:id', component: BookPageComponent },
  { path: 'books/popular', component: BooksPopularPageComponent },
  { path: 'search/:find/:keyword', component: SearchResultsPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
