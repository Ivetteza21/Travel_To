import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  nav:any;
  constructor(private router:Router){
    this.nav=this.router.getCurrentNavigation();
  }
}

