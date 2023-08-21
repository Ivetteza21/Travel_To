import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaIComponent } from './reserva-i.component';

describe('ReservaIComponent', () => {
  let component: ReservaIComponent;
  let fixture: ComponentFixture<ReservaIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservaIComponent]
    });
    fixture = TestBed.createComponent(ReservaIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
