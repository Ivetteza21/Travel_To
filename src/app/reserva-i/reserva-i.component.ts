import {Component, ViewChild,OnInit} from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ConfirmacionComponent } from '../confirmacion/confirmacion.component';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClienteService } from 'src/cliente.service';


@Component({
  selector: 'app-reserva-i',
  templateUrl:'./reserva-i.component.html',
  styleUrls: ['./reserva-i.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    NgIf,
  ],
})
export class ReservaIComponent implements OnInit {

   // nombre: string;
  // apellido: string;
  // correo: string;
  // telefono: string;
  // fecha_vencimiento: string;
  // codigo_verificacion: string;

  @ViewChild(MatAccordion) accordion!: MatAccordion;


    reservaInformacion=true;
    

    constructor(private service_cliente: ClienteService,@Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog) {
      this.reservaInformacion = data.reservaInformacion;
      }

       // enviarDatos() {
      //   const data1 = {
      //     nombre: this.nombre,
      //     apellido: this.apellido,
      //     correo:this.correo,
      //     telefono:this.telefono
      //   };
    
      //   const data2 = {
      //     fecha_vencimiento: this.fecha_vencimiento,
      //     codigo_verificacion: this.codigo_verificacion,
      //     nombre: this.nombre,
      //     apellido: this.apellido,
      //   };
    // }
    
     ngOnInit() { }

      openDialog() {
        this.reservaInformacion=false;
        this.dialog.open(ConfirmacionComponent);
      }
}

