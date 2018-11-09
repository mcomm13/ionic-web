import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppsPage } from './mobile-apps.page';

describe('MobileAppsPage', () => {
  let component: MobileAppsPage;
  let fixture: ComponentFixture<MobileAppsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAppsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
