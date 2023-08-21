import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup,} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})

export class CreateUserComponent implements OnInit {
  
  destino: any[] = [ 'Guayaquil', 'Quito', 'Galápagos', 'Cuenca'];
  alojamiento: any[] = ['Hotel', 'Apartamento', 'Complejo turístico' ];

  registrosNuevos: any[] = [];
 
  constructor(private dialogRef: MatDialogRef<CreateUserComponent>, private router: Router, private _snackBar: MatSnackBar) {
   }


   ngOnInit(): void {
    //this.startDate.setValue(new Date(2023, 0, 1));
  }

  usuarioNuevo = new FormGroup({
    fecha_inicio: new FormControl('',Validators.required),
    fecha_fin: new FormControl('',Validators.required),
    alojamiento: new FormControl('',Validators.required),
    transporte: new FormControl('', Validators.required),
    num_personas: new FormControl('', Validators.required),
    servicio_adicional: new FormControl('', Validators.required)
  })

   /*usuarioNuevo = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
    correo: new FormControl('', Validators.required),
    destino: new FormControl('', Validators.required),
    alojamiento: new FormControl('', Validators.required)
  })*/

  @Output() registrosAgregados = new EventEmitter<any[]>();
  onSubmit()
  {
    if (this.usuarioNuevo.valid) {
      const nuevoRegistro = {
        fecha_inicio: this.usuarioNuevo.value.fecha_inicio,
        fecha_fin: this.usuarioNuevo.value.fecha_fin,
        alojamiento: this.usuarioNuevo.value.alojamiento,
        transporte: this.usuarioNuevo.value.transporte,
        num_personas: this.usuarioNuevo.value.num_personas,
        servicio_adicional: this.usuarioNuevo.value.servicio_adicional
      };
      this.registrosAgregados.emit([nuevoRegistro]);
      this.usuarioNuevo.reset();
      this.dialogRef.close();

      /*const nuevoRegistro = {
        cedula: this.usuarioNuevo.value.cedula,
        nombre: this.usuarioNuevo.value.nombre,
        telefono: this.usuarioNuevo.value.telefono,
        correo: this.usuarioNuevo.value.correo,
        destino: this.usuarioNuevo.value.destino,
        alojamiento: this.usuarioNuevo.value.alojamiento
      };
      this.registrosAgregados.emit([nuevoRegistro]);
      this.usuarioNuevo.reset();
      this.dialogRef.close();*/
  }

    this._snackBar.open('El usuario fue creado con éxito','',{
      duration: 2000,
      horizontalPosition:'center',
      verticalPosition: 'bottom',
      })
  }


  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancel() {
    this.usuarioNuevo.reset();
    this.dialogRef.close();
  }


}

