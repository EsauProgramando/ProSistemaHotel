import { HotelComponent } from './pages/hotel/hotel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminindexComponent } from './pages/adminindex/adminindex.component';
import { HomeComponent } from './pages/home/home.component';
import { ListbaresComponent } from './pages/listbares/listbares.component';
import { ListhotelesComponent } from './pages/listhoteles/listhoteles.component';
import { ListcocherasComponent } from './pages/listcocheras/listcocheras.component';
import { ListpicinaComponent } from './pages/listpicina/listpicina.component';
import { ListgaleriaComponent } from './pages/listgaleria/listgaleria.component';
import { ListpreciosComponent } from './pages/listprecios/listprecios.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listar',
        component: AdminindexComponent,
        pathMatch: 'full',
      },
      {
        path: 'listarhotel',
        component: HotelComponent,
      },
      {
        path: 'listarusuario',
        component: UsuariosComponent,
      },
      {
        path: 'listarhoteles',
        component: ListhotelesComponent,
      },
      {
        path: 'listarbares',
        component: ListbaresComponent,
      },
      {
        path: 'listarcocheras',
        component: ListcocherasComponent,
      },
      {
        path: 'listarpicina',
        component: ListpicinaComponent,
      },
      {
        path: 'listargaleria',
        component: ListgaleriaComponent,
      },
      {
        path: 'listarprecios',
        component: ListpreciosComponent,
      },
      {
        path: '**',
        redirectTo: 'listar',
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
