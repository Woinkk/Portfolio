import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolPathComponent } from './school-path.component';

describe('SchoolPathComponent', () => {
  let component: SchoolPathComponent;
  let fixture: ComponentFixture<SchoolPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
