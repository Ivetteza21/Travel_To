import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { NgIf } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { ReservaIComponent } from '../reserva-i/reserva-i.component';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css'],
  standalone: true,
  imports: [MatDialogModule,NgIf,MatIconModule,MatDatepickerModule,MatInputModule,MatFormFieldModule,MatNativeDateModule,MatCardModule],
})
export class HabitacionesComponent  {

  mostrarInformacion=false;
  mostrarInformacionQuinta=false;
  mostrarInformacionCuba=false;
  mostrarInformacionDavid=false;
  mostrarInformacionBella=false;
  mostrarInformacionFriend=false;
  mostrarInformacionBanana=false;
  mostrarInformacionPakay=false;
  mostrarInformacionSelina=false;
  mostrarInformacionBunker=false;
  mostrarInformacionLodge=false;
  mostrarInformacionLaguna=false;
  mostrarInformacionAcacia=false;
  mostrarInformacionSuenos=false;
  mostrarInformacionBlu=false;
  mostrarInformacionIsabela=false;
  mostrarInformacionCactus=false;
  mostrarInformacionIkala=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.mostrarInformacion = data.mostrarInformacion;
    this.mostrarInformacionQuinta=data.mostrarInformacionQuinta;
    this.mostrarInformacionCuba=data.mostrarInformacionCuba;
    this.mostrarInformacionDavid=data.mostrarInformacionDavid;
    this.mostrarInformacionBella=data.mostrarInformacionBella;
    this.mostrarInformacionFriend=data.mostrarInformacionFriend;
    this.mostrarInformacionBanana=data.mostrarInformacionBanana;
    this.mostrarInformacionPakay=data.mostrarInformacionPakay;
    this.mostrarInformacionSelina=data.mostrarInformacionSelina;
    this.mostrarInformacionBunker=data.mostrarInformacionBunker;
    this.mostrarInformacionLodge=data.mostrarInformacionLodge;
    this.mostrarInformacionLaguna=data.mostrarInformacionLaguna;
    this.mostrarInformacionAcacia=data.mostrarInformacionAcacia;
    this.mostrarInformacionSuenos=data.mostrarInformacionSuenos;
    this.mostrarInformacionBlu=data.mostrarInformacionBlu;
    this.mostrarInformacionIsabela=data.mostrarInformacionIsabela;
    this.mostrarInformacionCactus=data.mostrarInformacionCactus;
    this.mostrarInformacionIkala=data.mostrarInformacionIkala;
  }

  abrirInformacionReserva() {
    const dialogRef = this.dialog.open(ReservaIComponent, { data: { reservaInformacion: true } });
  }

}
