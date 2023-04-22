import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesectionComponent } from './titlesection.component';

describe('TitlesectionComponent', () => {
  let component: TitlesectionComponent;
  let fixture: ComponentFixture<TitlesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
