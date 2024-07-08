import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from './models/menu-item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private apiUrl = 'http://localhost:5000/api/pedidos';

  constructor(private http: HttpClient) {}

  // Método para realizar un nuevo pedido
  createOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/pedidos`, order);
  }

  getMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${this.apiUrl}/menu`);
  }
}
