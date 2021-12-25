import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginNavigationComponent } from './components/login-navigation/login-navigation.component';
import { UserNavigationComponent } from './components/user-navigation/user-navigation.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';
import { BooksPopularPageComponent } from './components/books-popular-page/books-popular-page.component';
import { HorizontalListComponent } from './components/horizontal-list/horizontal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginNavigationComponent,
    UserNavigationComponent,
    SearchBarComponent,
    FrontPageComponent,
    BookPageComponent,
    SearchResultsPageComponent,
    BooksPopularPageComponent,
    HorizontalListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
