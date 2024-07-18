import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalificacionService } from '../calificacion.service';
import { MeseroService } from '../mesero.service';

@Component({
  selector: 'app-formulario-mesero',
  templateUrl: './formulario-mesero.component.html',
  styleUrl: './formulario-mesero.component.css',
})
export class FormularioMeseroComponent implements OnInit {
  ratingForm: FormGroup;
  meseros: any[] = [];

  constructor(
    private fb: FormBuilder,
    private calificacionService: CalificacionService,
    private meseroServicio: MeseroService
  ) {
    this.ratingForm = this.fb.group({
      mesero: ['', Validators.required],
      fecha: ['', Validators.required],
      calificacion: [null, Validators.required],
      comentario: [''],
    });
  }

  ngOnInit() {
    this.cargarMeseros();
  }

  cargarMeseros() {
    this.meseroServicio.getMeseros().subscribe(
      (waiters) => {
        this.meseros = waiters.map(waiter => waiter.name);
      },
      (error) => {
        console.error('Error al cargar los meseros', error);
      }
    );
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
