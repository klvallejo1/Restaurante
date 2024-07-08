import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-menu',
  templateUrl: './formulario-menu.component.html',
  styleUrl: './formulario-menu.component.css'
})
export class FormularioMenuComponent implements OnInit{
  orderForm: FormGroup;
  productos = ['Pizza', 'Hamburguesa', 'Ensalada'];
  cantidades= Array.from({ length: 20 }, (_, i) => i + 1);
  mesas = Array.from({ length: 20 }, (_, i) => i + 1);

  constructor(private fb: FormBuilder){
    this.orderForm = this.fb.group({
      producto: ['', Validators.required],
      cantidad: [1, Validators.required],
      mesa: [1, Validators.required],
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
    }
  }

}
