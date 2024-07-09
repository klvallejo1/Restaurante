import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalificacionService } from '../calificacion.service';

@Component({
  selector: 'app-formulario-mesero',
  templateUrl: './formulario-mesero.component.html',
  styleUrl: './formulario-mesero.component.css',
})
export class FormularioMeseroComponent {
  ratingForm: FormGroup;
  meseros: string[] = [
    'John Serrano',
    'Nubia Araujo',
    'Johan Albiño',
    'Carlos Andrade',
  ];

  constructor(
    private fb: FormBuilder,
    private calificacionService: CalificacionService
  ) {
    this.ratingForm = this.fb.group({
      mesero: ['', Validators.required],
      fecha: ['', Validators.required],
      calificacion: [null, Validators.required],
      comentario: [''],
    });
  }

  onSubmit(): void {
    if (this.ratingForm.valid) {
      this.calificacionService
        .enviarCalificacion(this.ratingForm.value)
        .subscribe(
          (response) => {
            console.log('Calificación enviada con éxito', response);
            alert('Su calificación ha sido enviada correctamente');
          },
          (error) => {
            console.error('Error al enviar la calificación', error);
            alert('Su calificación NO ha sido enviada correctamente');
          }
        );
    }
  }
}
