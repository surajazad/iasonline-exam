import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamContainerComponent } from './exam-container.component';

describe('ExamContainerComponent', () => {
  let component: ExamContainerComponent;
  let fixture: ComponentFixture<ExamContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
