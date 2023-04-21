import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsignbuttomsComponent } from './logsignbuttoms.component';

describe('LogsignbuttomsComponent', () => {
  let component: LogsignbuttomsComponent;
  let fixture: ComponentFixture<LogsignbuttomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsignbuttomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogsignbuttomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
