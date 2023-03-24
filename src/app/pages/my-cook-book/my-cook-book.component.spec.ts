import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCookBookComponent } from './my-cook-book.component';

describe('MyCookBookComponent', () => {
  let component: MyCookBookComponent;
  let fixture: ComponentFixture<MyCookBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCookBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCookBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
