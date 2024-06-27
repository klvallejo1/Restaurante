import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario-mesero',
  templateUrl: './formulario-mesero.component.html',
  styleUrl: './formulario-mesero.component.css',
})
export class FormularioMeseroComponent {
  ratingForm: FormGroup;
  meseros: string[] = ['John Serrano', 'Nubia Araujo', 'John Albiño', 'Carlos Andrade'];

  constructor(private fb: FormBuilder) {
    this.ratingForm = this.fb.group({
      mesero: [''],
      fecha: [''],
      calificacion: [''],
      comentario: [''],
    });
  }

  onSubmit() {
    if (this.ratingForm.valid) {
      console.log(this.ratingForm.value);
    }
  }
}
