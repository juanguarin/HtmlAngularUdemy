import { Component } from '@angular/core';

/*Se importa el componente de los servicios para ser usado en la pagina del footer. */

import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  anio: number = new Date().getFullYear();

/* Al agregar public _is: InformacionService ya
  tengo acceso a todos los metodos y atributos de InformacionService. */
  constructor( public _is: InformacionService) {
  }
}
