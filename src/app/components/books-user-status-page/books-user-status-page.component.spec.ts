import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksUserStatusPageComponent } from './books-user-status-page.component';

describe('BooksUserStatusPageComponent', () => {
  let component: BooksUserStatusPageComponent;
  let fixture: ComponentFixture<BooksUserStatusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksUserStatusPageComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksUserStatusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
