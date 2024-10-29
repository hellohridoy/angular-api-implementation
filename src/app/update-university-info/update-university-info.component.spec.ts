import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUniversityInfoComponent } from './update-university-info.component';

describe('UpdateUniversityInfoComponent', () => {
  let component: UpdateUniversityInfoComponent;
  let fixture: ComponentFixture<UpdateUniversityInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUniversityInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUniversityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
