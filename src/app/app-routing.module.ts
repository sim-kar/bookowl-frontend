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
import { ReviewsPageComponent } from './components/reviews-page/reviews-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import {
  BooksHighestPageComponent,
} from './components/books-highest-page/books-highest-page.component';
import {
  BooksRecentPageComponent,
} from './components/books-recent-page/books-recent-page.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import {
  UserSettingsPageComponent,
} from './components/user-settings-page/user-settings-page.component';
import {
  BooksUserStatusPageComponent,
} from './components/books-user-status-page/books-user-status-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'book/:isbn', component: BookPageComponent },
  { path: 'books/popular', component: BooksPopularPageComponent },
  { path: 'books/highest-rated', component: BooksHighestPageComponent },
  { path: 'books/recent', component: BooksRecentPageComponent },
  { path: 'reviews', component: ReviewsPageComponent },
  { path: 'reviews/:username/book/:isbn', component: ReviewPageComponent },
  { path: 'search/:find/:keyword', component: SearchResultsPageComponent },
  { path: 'user/:username', component: UserPageComponent },
  { path: 'user/:username/settings', component: UserSettingsPageComponent },
  { path: 'user/:username/:status', component: BooksUserStatusPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: '**', component: PageNotFoundComponent }, // wildcard route for 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
