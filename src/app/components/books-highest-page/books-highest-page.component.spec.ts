import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksHighestPageComponent } from './books-highest-page.component';

describe('BooksHighestPageComponent', () => {
  let component: BooksHighestPageComponent;
  let fixture: ComponentFixture<BooksHighestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksHighestPageComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksHighestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
