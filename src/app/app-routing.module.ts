import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginNavigationComponent } from './components/login-navigation/login-navigation.component';
import { UserNavigationComponent } from './components/user-navigation/user-navigation.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import {
  SearchResultsPageComponent,
} from './components/search-results-page/search-results-page.component';
import {
  BooksPopularPageComponent,
} from './components/books-popular-page/books-popular-page.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'book/:id', component: BookPageComponent },
  { path: 'books/popular', component: BooksPopularPageComponent },
  { path: 'search/:find/:keyword', component: SearchResultsPageComponent },
  { path: '', component: LoginNavigationComponent, outlet: 'loginNavigation' },
  { path: 'user', component: UserNavigationComponent, outlet: 'loginNavigation' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
