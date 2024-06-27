import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrl: './card-menu.component.css'
})
export class CardMenuComponent {

  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() imageUrl: string = '';
  @Input() precio: string = '';

  constructor(private router: Router){}


}
