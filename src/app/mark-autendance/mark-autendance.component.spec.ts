import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAutendanceComponent } from './mark-autendance.component';

describe('MarkAutendanceComponent', () => {
  let component: MarkAutendanceComponent;
  let fixture: ComponentFixture<MarkAutendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkAutendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkAutendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
