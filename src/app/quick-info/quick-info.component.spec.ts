import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickInfoComponent } from './quick-info.component';

describe('QuickInfoComponent', () => {
  let component: QuickInfoComponent;
  let fixture: ComponentFixture<QuickInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
