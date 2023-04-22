import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserformComponent } from './edituserform.component';

describe('EdituserformComponent', () => {
  let component: EdituserformComponent;
  let fixture: ComponentFixture<EdituserformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdituserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
