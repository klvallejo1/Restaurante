import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {
  private apiUrl = 'http://localhost:5000/api/calificaciones'; 

  constructor(private http: HttpClient) { }

  enviarCalificacion(calificacion: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, calificacion);
  }
}
