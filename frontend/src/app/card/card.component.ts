import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() imageUrl: string = '';

  constructor(private router: Router){}

  cardClicked() {

    if(this.titulo === 'NUESTRO MENÚ!'){
      this.router.navigate(['/menu']);
    }else if (this.titulo === 'ORDENA YÁ!'){
      this.router.navigate(['/pedido'])
    }else if (this.titulo === 'CALIFÍCA!'){
      this.router.navigate(['/calificar']);
    }
  }

}
