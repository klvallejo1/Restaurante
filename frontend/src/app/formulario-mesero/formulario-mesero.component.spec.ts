import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMeseroComponent } from './formulario-mesero.component';

describe('FormularioMeseroComponent', () => {
  let component: FormularioMeseroComponent;
  let fixture: ComponentFixture<FormularioMeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioMeseroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioMeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
