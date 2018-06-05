import { Component, OnInit } from '@angular/core';

// Se importa el servicio para poder utilizar la información de FireBase.
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  // Se inyecta en el constructor el servicio y se asigna a la variable _is.
  // La información que se trae desde FireBase.
  constructor( public _is: InformacionService) { }

  ngOnInit() {
  }

}
