import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IamusDateComponent } from './iamus-date.component';

describe('IamusDateComponent', () => {
  let component: IamusDateComponent;
  let fixture: ComponentFixture<IamusDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IamusDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IamusDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
