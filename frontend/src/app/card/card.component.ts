import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() imageUrl: string = '';

  constructor(){}

  cardClicked() {
    console.log('Tarjeta clickeada!');
    
  }
}
