import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MenuServiceService } from '../menu.service';
import { MenuItem } from '../models/menu-item.model';


@Component({
  selector: 'app-tabla-menu',
  templateUrl: './tabla-menu.component.html',
  styleUrl: './tabla-menu.component.css'
})

export class TablaMenuComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'producto', 'descripcion', 'precio', 'cantidad', 'disponibilidad'];
  dataSource = new MatTableDataSource<MenuItem>();

  constructor(private menuService: MenuServiceService) {}

  ngOnInit() {
    this.menuService.getMenu().subscribe(
      (data: MenuItem[]) => {
        this.dataSource.data = data;
      },
      (error) => {
        console.error('Error fetching menu:', error);
      }
    );
  }
}