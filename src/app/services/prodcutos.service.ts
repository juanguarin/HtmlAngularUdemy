import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProdcutosService {
  productos: any [] = [];
  productos_filtrado: any[] = []; /* Arreglo para guardar los prodcuto
  filtrados en el buscar de la pagina. */
  cargando: Boolean = true;

  constructor( private http: Http) {

    this.cargar_producto();
  }

/**
* Metodo para buscar prodcuto según un termino enviado.
 */
public buscar_producto( termino: string) {
  console.log( 'Buscando productos' );
  console.log( this.productos.length );
  this.productos.forEach( prod => {
      console.log( prod );
  });

}

  /**
   * Metodo para cargar los productos de la pagian del portafolio.
   */
  public cargar_producto() {

    this.cargando = true;

    if (this.productos.length === 0) {

      this.http.get('https://angularhtmlweb.firebaseio.com/productos_idx.json')
      .subscribe( res => {  // console.log(res.json());
      /*Se agrega la funcion setTimeout para que la carga se demore 1,5 segundos. */
      setTimeout(() => {
        this.productos = res.json();
        this.cargando = false;
      }, 1500);

      });

    }

  }

  /**
   * Metodo para devbolver el observable referenciando la información de un solo prodcuto a partir de su codigo de BD de firebase.
   */
  public carga_prodcuto( cod: string ) {

    /*Asi se ontiene la info de un solo producto:
    return this.http.get('https://angularhtmlweb.firebaseio.com/productos/prod-1.json');
    Si se requeire obtener el producto de manera automatica con su codigo (cod) se debe cambiar las
    comillas (') por un template literal con comillas invertidas (`) y para agregar el codigo se
    reemplaza por ${ cod } el template literal.
    Aqui solo se define el observador.
     */
    return this.http.get(`https://angularhtmlweb.firebaseio.com/productos/${ cod }.json`);

  }


}
