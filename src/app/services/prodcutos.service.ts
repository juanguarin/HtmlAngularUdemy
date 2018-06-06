import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProdcutosService {
  productos: any [] = [];
  cargando: Boolean = true;

  constructor( private http: Http) {

    this.cargar_producto();
  }
  /**
   * Metodo para cargar los productos
   * de la pagian del portafolio.
   */
  public cargar_producto() {

    this.cargando = true;

    if (this.productos.length === 0) {

      this.http.get('https://angularhtmlweb.firebaseio.com/productos_idx.json')
      .subscribe( res => {  console.log(res.json());
      this.productos = res.json();
      this.cargando = true;
      });

    }

  }


}
