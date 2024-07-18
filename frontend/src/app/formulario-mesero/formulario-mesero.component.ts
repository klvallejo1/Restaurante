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
      calificacion: ['', Validators.required],
      comentario: ['']
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

  onSubmit() {
    if (this.ratingForm.valid) {
      const calificacionData = this.ratingForm.value;
      
      calificacionData.fecha = new Date(calificacionData.fecha).toISOString();
      
      this.calificacionService.enviarCalificacion(calificacionData).subscribe(
        response => {
          alert('Calificación enviada con éxito');
          console.log('Calificación enviada con éxito', response);
          this.ratingForm.reset();
        },
        error => {
          alert('No se ha enviado tu calificacion, hazlo de nuevo');
          console.error('Error al enviar la calificación', error);
        }
      );
    } else {
      alert('Formulario invalido');
      console.log('Formulario inválido');
    }
  }
}
