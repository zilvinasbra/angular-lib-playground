import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IamusWeatherComponent } from './iamus-weather.component';

describe('IamusWeatherComponent', () => {
  let component: IamusWeatherComponent;
  let fixture: ComponentFixture<IamusWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IamusWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IamusWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
