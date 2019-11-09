import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleListPage } from './cattle-list.page';

describe('CattleListPage', () => {
  let component: CattleListPage;
  let fixture: ComponentFixture<CattleListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattleListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
