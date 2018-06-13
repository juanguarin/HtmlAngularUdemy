import { Component} from '@angular/core';

/*Servicios */
import { ProdcutosService } from '../../services/prodcutos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent {

  constructor( public _ps: ProdcutosService) { }

}
