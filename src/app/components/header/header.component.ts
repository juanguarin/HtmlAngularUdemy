/*import { Component, OnInit } from '@angular/core'; SE ELIMINA*/
import { Component} from '@angular/core';

/*Se injectara el componente del servicio para usarlo en el header. */
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'/*, SE ELIMINA
  styleUrls: ['./header.component.css']*/
})
/*export class HeaderComponent implements OnInit { SE ELIMINA*/
export class HeaderComponent {

  /* Al agregar public _is: InformacionService ya
  tengo acceso a todos los metodos y atributos de InformacionService. */
  constructor( public _is: InformacionService ) { }

  /*ngOnInit() {
  } SE ELIMINA */

}
