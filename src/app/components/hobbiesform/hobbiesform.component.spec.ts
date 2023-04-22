import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesformComponent } from './hobbiesform.component';

describe('HobbiesformComponent', () => {
  let component: HobbiesformComponent;
  let fixture: ComponentFixture<HobbiesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
