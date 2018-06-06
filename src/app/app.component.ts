import { Component } from '@angular/core';

import { InformacionService } from './services/informacion.service';
/* Se importa el servicio para usarlo.*/
import { ProdcutosService } from './services/prodcutos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    constructor( public _is: InformacionService,
                 public _ps: ProdcutosService) { /* Se utiliza el servicio. */

    }

}
