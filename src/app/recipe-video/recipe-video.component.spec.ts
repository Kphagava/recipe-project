import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeVideoComponent } from './recipe-video.component';

describe('RecipeVideoComponent', () => {
  let component: RecipeVideoComponent;
  let fixture: ComponentFixture<RecipeVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
