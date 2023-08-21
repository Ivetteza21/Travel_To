import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlojamientoComponent } from './lista-alojamiento.component';

describe('ListaAlojamientoComponent', () => {
  let component: ListaAlojamientoComponent;
  let fixture: ComponentFixture<ListaAlojamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAlojamientoComponent]
    });
    fixture = TestBed.createComponent(ListaAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
