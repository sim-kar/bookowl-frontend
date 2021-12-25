import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPopularPageComponent } from './books-popular-page.component';

describe('BooksPopularPageComponent', () => {
  let component: BooksPopularPageComponent;
  let fixture: ComponentFixture<BooksPopularPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksPopularPageComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksPopularPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
