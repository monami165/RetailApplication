import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesDeleteComponent } from './companies-delete.component';

describe('CompaniesDeleteComponent', () => {
  let component: CompaniesDeleteComponent;
  let fixture: ComponentFixture<CompaniesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
