import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { resolve } from 'url';
import { reject } from 'q';

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
  // console.log( 'Buscando productos' );
  // console.log( this.productos.length );

  if (this.productos.length === 0) {

    this.cargar_producto().then( () => {
            // En este moemnto se sabe si ya termino la carga. Gracias a la promesa del metodo cargar_producto.
      this.filtrar_productos(termino); // No se ejecuta hasta no terminar cargar_producto.
    });

  } else {

    this.filtrar_productos(termino);

  }


}
/**
 * Metodo para filtrar la información.
 */
private filtrar_productos(termino: string) {

  this.productos_filtrado = [];

  termino = termino.toLowerCase(); // Se vuelve minuscula para poder facilitar la busqueda ya que javaScript
                                         // es case sensitive.

  this.productos.forEach( prod => {
      // console.log( prod );
      // Se usa toLowerCase para volver los valores de la propiedad en minuscula.
    if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0 ) {
        this.productos_filtrado.push( prod );
        // console.log(prod);
      }
  });

}
  /**
   * Metodo para cargar los productos de la pagian del portafolio.
   */
  public cargar_producto() {

    this.cargando = true;

    let promesa = new Promise(( resolve, reject ) => { /* Se agrega el maenjo de promesas.
       Que abarca el manejo del subscribe para obtener la información.*/
      this.http.get('https://angularhtmlweb.firebaseio.com/productos_idx.json')
      .subscribe( res => {  // console.log(res.json());
      /*Se agrega la funcion setTimeout para que la carga se demore 1,5 segundos. */
      // setTimeout(() => {
        this.productos = res.json();
        this.cargando = false;
        resolve();
      // }, 1500);

    });
    // if (this.productos.length === 0) {

      });
    return promesa;
    // }

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
