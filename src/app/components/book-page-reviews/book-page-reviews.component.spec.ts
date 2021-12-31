import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPageReviewsComponent } from './book-page-reviews.component';

describe('BookPageReviewsComponent', () => {
  let component: BookPageReviewsComponent;
  let fixture: ComponentFixture<BookPageReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookPageReviewsComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPageReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
