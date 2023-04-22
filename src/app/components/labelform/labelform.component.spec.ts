import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelformComponent } from './labelform.component';

describe('LabelformComponent', () => {
  let component: LabelformComponent;
  let fixture: ComponentFixture<LabelformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
