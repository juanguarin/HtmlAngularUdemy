import { Component, OnInit } from '@angular/core';
/*Se importa el ActivatedRoute para poder obtener la información enviada por el enrutamiento. */
import { ActivatedRoute } from '@angular/router';
/*Se importa el servicio del producto para ontener la infroamción del mismo. */
import { ProdcutosService } from '../../services/prodcutos.service';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styles: []
})
export class PortafolioItemComponent {

  producto: any = undefined;
  cod: string = undefined;

  constructor(private router: ActivatedRoute, public _ps: ProdcutosService) {
    /*Este metodo devuelve un objeto que se asigna a parametros, se obtiene
    el parametro id donde viene la información enviada desde el enrutamiento del
    app.routes.ts. */
    router.params.subscribe( parametros => {
     // console.log(parametros);
     // console.log(parametros['id']);

     /*Se utiliza el metodo carga_producto que devuelve un observable y en este componente se suscribe para obtener la info. */
     _ps.carga_prodcuto( parametros['id'] ).subscribe(res => {
       // console.log(res.json());
       this.cod = parametros['id'];
       this.producto = res.json();
     });


    });

   }
}
