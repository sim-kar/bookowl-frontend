import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginNavigationComponent } from './components/login-navigation/login-navigation.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';
import { BooksPopularPageComponent } from './components/books-popular-page/books-popular-page.component';
import { HorizontalListComponent } from './components/horizontal-list/horizontal-list.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { httpInterceptorProviders } from './http-interceptors';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReviewsPageComponent } from './components/reviews-page/reviews-page.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { BooksHighestPageComponent } from './components/books-highest-page/books-highest-page.component';
import { BooksRecentPageComponent } from './components/books-recent-page/books-recent-page.component';
import { BookPageReviewsComponent } from './components/book-page-reviews/book-page-reviews.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { UserSettingsPageComponent } from './components/user-settings-page/user-settings-page.component';
import { ListComponent } from './components/list/list.component';
import { BooksUserStatusPageComponent } from './components/books-user-status-page/books-user-status-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginNavigationComponent,
    SearchBarComponent,
    FrontPageComponent,
    BookPageComponent,
    SearchResultsPageComponent,
    BooksPopularPageComponent,
    HorizontalListComponent,
    SignUpPageComponent,
    LoginPageComponent,
    NavigationComponent,
    ReviewsPageComponent,
    StarRatingComponent,
    UserPageComponent,
    DropdownMenuComponent,
    BooksHighestPageComponent,
    BooksRecentPageComponent,
    BookPageReviewsComponent,
    ReviewPageComponent,
    UserSettingsPageComponent,
    ListComponent,
    BooksUserStatusPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
