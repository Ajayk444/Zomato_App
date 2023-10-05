import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestarantComponent } from './restarant.component';

describe('RestarantComponent', () => {
  let component: RestarantComponent;
  let fixture: ComponentFixture<RestarantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestarantComponent]
    });
    fixture = TestBed.createComponent(RestarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
