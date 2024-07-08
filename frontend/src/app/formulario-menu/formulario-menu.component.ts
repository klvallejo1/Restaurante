import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuServiceService } from '../menu.service';
import { MenuItem } from '../models/menu-item.model';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-formulario-menu',
  templateUrl: './formulario-menu.component.html',
  styleUrl: './formulario-menu.component.css',
})
export class FormularioMenuComponent implements OnInit {
  orderForm: FormGroup;
  menuItems: MenuItem[] = [];
  mesas = Array.from({ length: 20 }, (_, i) => i + 1);

  constructor(private fb: FormBuilder, private orderService: PedidoService) {
    this.orderForm = this.fb.group({
      producto: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      mesa: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.orderService.getMenu().subscribe(
      (data) => {
        this.menuItems = data;
      },
      (error) => {
        console.error('Error al obtener el menú:', error);
      }
    );
  }

  onSubmit() {
    if (this.orderForm.valid) {
      this.orderService.createOrder(this.orderForm.value).subscribe(
        (response) => {
          console.log('Pedido creado:', response);
        },
        (error) => {
          console.error('Error al crear el pedido:', error);
        }
      );
    }
  }

  getCantidadesDisponibles(): number[] {
    const productoSeleccionado = this.menuItems.find(
      (item) => item.producto === this.orderForm.get('producto')?.value
    );
    if (productoSeleccionado) {
      return Array.from(
        { length: productoSeleccionado.cantidad },
        (_, i) => i + 1
      );
    }
    return [];
  }
}
