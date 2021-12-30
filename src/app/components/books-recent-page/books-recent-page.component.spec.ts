import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksRecentPageComponent } from './books-recent-page.component';

describe('BooksRecentPageComponent', () => {
  let component: BooksRecentPageComponent;
  let fixture: ComponentFixture<BooksRecentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksRecentPageComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksRecentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
