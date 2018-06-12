import { Component } from '@angular/core';
/* Se importa el ActivatedRoute para poder obtener la información enviada por el enrutamiento
campo termino. */
import { ActivatedRoute } from '@angular/router';
/*Se importa el servicio del producto para obtener la información de los productos. */
import { ProdcutosService } from '../../services/prodcutos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

  termino: string = undefined;

  constructor( router: ActivatedRoute,
               private _ps: ProdcutosService) {
    /*Este metodo devuelve un objeto que se asigna a parametros, se obtiene
   el parametro id donde viene la información enviada desde el enrutamiento del
   app.routes.ts. */
    router.params.subscribe(parametros => {

      this.termino = parametros['termino'];
      console.log( this.termino );

      _ps.buscar_producto( this.termino );

      });
   }



}
