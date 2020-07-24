import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsJsonComponent } from './dropdowns-json.component';

describe('DropdownsJsonComponent', () => {
  let component: DropdownsJsonComponent;
  let fixture: ComponentFixture<DropdownsJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownsJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownsJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
