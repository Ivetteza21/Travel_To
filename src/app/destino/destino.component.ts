import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HabitacionesComponent } from '../habitaciones/habitaciones.component';
import { DialogRef } from '@angular/cdk/dialog';
import { ConfirmacionComponent } from '../confirmacion/confirmacion.component';

interface destino {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatCardModule, CommonModule, MatGridListModule, MatButtonModule, MatIconModule, MatDialogModule, HabitacionesComponent],
})
export class DestinoComponent {

  

  constructor(private dialog: MatDialog) { width: '500px' }
   
  
  abrirInformacion() {
    const dialogRef = this.dialog.open(HabitacionesComponent, { data: { mostrarInformacion: true } });
  }

  abrirInformacionHotelQuinta() {
    const dialogRef = this.dialog.open(HabitacionesComponent, { data: { mostrarInformacionQuinta: true } });
  }

  abrirInformacionHotelCuba() {
    const dialogRef = this.dialog.open(HabitacionesComponent, { data: { mostrarInformacionCuba: true } });
  }

  abrirInformacionHotelDavid() {
    const dialogRef = this.dialog.open(HabitacionesComponent, { data: { mostrarInformacionDavid: true } });
  }

  abrirInformacionHotelBella() {
    const dialogRef = this.dialog.open(HabitacionesComponent, { data: { mostrarInformacionBella: true } });
  }

  abrirInformacionHotelFriends() {
    const dialogRef = this.dialog.open(HabitacionesComponent, { data: { mostrarInformacionFriend: true } });
  }

  abrirInformacionHotelBanana(){
    const dialogRef=this.dialog.open(HabitacionesComponent,{data:{mostrarInformacionBanana:true}});
  }

  abrirInformacionHotelPakay(){
    const dialogRef=this.dialog.open(HabitacionesComponent,{data:{mostrarInformacionPakay:true}});
  }

  abrirInformacionHotelSelina(){
    const dialogRef=this.dialog.open(HabitacionesComponent,{data:{mostrarInformacionSelina:true}});
  }

  abrirInformacionHotelBunker(){
    const dialogRef=this.dialog.open(HabitacionesComponent,{data:{mostrarInformacionBunker:true}});
  }
  

  abrirInformacionHotelLodge(){
    const dialogRef=this.dialog.open(HabitacionesComponent,{data:{mostrarInformacionLodge:true}});
  }
  
  abrirInformacionHotelLaguna(){
    const dialogRef=this.dialog.open(HabitacionesComponent,{data:{mostrarInformacionLaguna:true}});
  }
  

  abrirInformacionHotelAcacia(){
    const dialogRef=this.dialog.open(HabitacionesComponent,{data:{mostrarInformacionAcacia:true}});
  }
  
  abrirInformacionHotelSueno(){
    const dialogRef=this.dialog.open(HabitacionesComponent,{data:{mostrarInformacionSuenos:true}});
  }

  abrirInformacionHotelBlu(){
    const dialogRef=this.dialog.open(HabitacionesComponent,{data:{mostrarInformacionBlu:true}});
  }

  abrirInformacionHotelIsabela(){
    const dialogRef=this.dialog.open(HabitacionesComponent,{data:{mostrarInformacionIsabela:true}});
  }

  abrirInformacionHotelCactus(){
    const dialogRef=this.dialog.open(HabitacionesComponent,{data:{mostrarInformacionCactus:true}});
  }

  abrirInformacionHotelIkala(){
    const dialogRef=this.dialog.open(HabitacionesComponent,{data:{mostrarInformacionIkala:true}});
  }
  
  ngOnInit(): void {
  }

  destinos: destino[] = [
    { value: 'option0', viewValue: 'Destinos' },
    { value: 'option1', viewValue: 'Quito' },
    { value: 'option2', viewValue: 'Napo' },
    { value: 'option3', viewValue: 'Galápagos' },
  ];

  selectedDestiny = this.destinos[0].value;
}

