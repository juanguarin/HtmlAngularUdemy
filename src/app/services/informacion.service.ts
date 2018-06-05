import { Injectable } from '@angular/core';

import { Http } from '@angular/http'; /* Se debe agregar el modulo http para leer
 la información que utilizar el servicio.*/

@Injectable()
export class InformacionService {

  info: any = [];
  /*Se agrega esta propiedad para cargar la
  información del JSON en un objeto (info).  */
  cargada: Boolean = false;
  cargada_firebase: Boolean = false;
  info_firebase: any [] = []; // Objeto para almacenar la info. que viene de firebase.

  constructor( public http: Http ) {

     this.carga_de_firebase(); // Se llama la información del servicio.

  }

  public carga_info () {

    this.http.get('assets/data/info.pagina.json')
      .subscribe(data => { // console.log(data.json()); Esta linea sirve para escribir en la consola del navegador.
        this.info = data.json();
        this.cargada = true;
      });
    /* Se hace la lectura de la información del archivo JSON por medio
    de los modulos Http y se suscribe en la variable data. Para despues
    asignar la información del JSON en un objeto de tipo any.*/

  }

  public carga_de_firebase() {
    /*Se pone la ruta de la fuente de la infromación en este caso firebase. */
    this.http.get('https://angularhtmlweb.firebaseio.com/equipo.json')
      .subscribe(data => { // console.log(data.json()); // Esta linea sirve para escribir en la consola del navegador.
        this.info_firebase = data.json();
        this.cargada_firebase = true;
      });

  }

}
