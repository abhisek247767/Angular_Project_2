import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompoComponent } from './add-compo.component';

describe('AddCompoComponent', () => {
  let component: AddCompoComponent;
  let fixture: ComponentFixture<AddCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCompoComponent]
    });
    fixture = TestBed.createComponent(AddCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
