import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPopOver } from './info-pop-over';

describe('InfoPopOver', () => {
  let component: InfoPopOver;
  let fixture: ComponentFixture<InfoPopOver>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPopOver]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPopOver);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
