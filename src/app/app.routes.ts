import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

import { AboutComponent, PortafolioComponent, PortafolioItemComponent
} from './components/index.paginas'; /*Se importa en uan sola linea las rutas relacionadas
                                     en el archivo de rutas creado. */

const app_routes: Routes = [
    { path: '', component: PortafolioComponent },
    /*Se agrega para direccionar al home cuando una pagina no escoge nada.*/
    { path: 'about', component: AboutComponent },
    /*Se agrega para direccionar al about.*/
    { path: 'portafolioItem', component: PortafolioItemComponent },
    /*Se agrega para direccionar al item del portafolio.*/
    { path: '**', pathMatch: 'full', redirectTo: '' }
    /* Aqui especifica que cuando no encuentre la ruta la envie al home ''. */
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
/*El {useHash: true} se usa para que se creen las rutas no solo en html5 para
 mayor compatibilidad. */
