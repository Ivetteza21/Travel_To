import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { ListaAlojamientoComponent } from './lista-alojamiento/lista-alojamiento.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: FirstComponent },
      { path: 'first', component: FirstComponent },
      { path: 'body', component: BodyComponent },
      { path: 'login', component: LoginComponent },
      { path: 'crud', component: CrudComponent },
      { path: 'lista-alojamiento', component: ListaAlojamientoComponent },
      { path: 'alojamiento', component: AlojamientoComponent },
      //{path: 'clientes',component: ClientesComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
