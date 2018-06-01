import { Injectable } from '@angular/core';

import { Http } from '@angular/http'; /* Se debe agregar el modulo http para leer
 la información que utilizar el servicio.*/

@Injectable()
export class InformacionService {

  info: any = [];
  /*Se agrega esta propiedad para cargar la
  información del JSON en un objeto (info).  */
  cargada: Boolean = false;

  constructor( public http: Http ) {

    this.http.get('assets/data/info.pagina.json')
    .subscribe( data => { console.log(data.json());
                           this.info = data.json();
                           this.cargada = true;
                         })
    /* Se hace la lectura de la información del archivo JSON por medio
    de los modulos Http y se suscribe en la variable data. Para despues
    asignar la información del JSON en un objeto de tipo any.*/

  }

}
