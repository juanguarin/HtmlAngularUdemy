import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
/* Se importa el modulo HttpModule ya que inicialmente no se importa,
el cual nos sirve para poder consumir servicios.*/

// Rutas

import { app_routing } from './app.routes';
/* Se importa el archivo de rutas de las paginas.*/

// Servicios

import { InformacionService } from './services/informacion.service';
/* Se importa el archivo con los servicios creados.*/
import { ProdcutosService } from './services/prodcutos.service';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortafolioItemComponent } from './components/portafolio-item/portafolio-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortafolioItemComponent, /* Se agregan los componentes */
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule/* Se agrega en los imports los modulos como el
    routing o HttpModule.*/
  ],
  providers: [InformacionService, ProdcutosService], /*Se agregan los archivo con los servicios creados.*/
  bootstrap: [AppComponent]
})
export class AppModule { }
