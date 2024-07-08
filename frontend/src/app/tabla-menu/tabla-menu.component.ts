import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Producto {
  numero: number;
  nombre: string;
  cantidad: number;
  disponibilidad: boolean;
}

@Component({
  selector: 'app-tabla-menu',
  templateUrl: './tabla-menu.component.html',
  styleUrl: './tabla-menu.component.css'
})
export class TablaMenuComponent implements OnInit{
  displayedColumns: string[] = ['numero', 'nombre', 'cantidad', 'disponibilidad'];
  dataSource = new MatTableDataSource<Producto>();

  ngOnInit() {
    const productos: Producto[] = [
      {numero: 1, nombre: 'Producto A', cantidad: 10, disponibilidad: true},
      {numero: 2, nombre: 'Producto B', cantidad: 5, disponibilidad: false},
      {numero: 3, nombre: 'Producto C', cantidad: 15, disponibilidad: true},
    ];
    this.dataSource.data = productos;
  }
}
