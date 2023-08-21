import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../interfaces/user';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from '../services/user.service';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { PaqueteViajeInterface } from '../interfaces/PaqueteViajeInterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaqueteviajeService } from '../services/paqueteviaje.service';

//import { UserInterface } from '../interfaces/UserInterface';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})

export class CrudComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['fecha_inicio', 'fecha_fin', 'alojamiento', 'transporte', 'num_personas', 'servicio_adicional', 'acciones'];

  data = [
    {
      fecha_inicio: new Date('2023-07-01'),
      fecha_fin: new Date('2023-08-10'),
      alojamiento: 'Hotel',
      transporte: 'Avion',
      num_personas: 2,
      servicio_adicional: 'Alquiler de bicicletas'
    },
    {
      fecha_inicio: new Date('2023-06-01'),
      fecha_fin: new Date('2023-07-21'),
      alojamiento: 'Cabaña',
      transporte: 'Auto',
      num_personas: 4,
      servicio_adicional: 'Excursiones'
    },
    {
      fecha_inicio: new Date('2023-06-20'),
      fecha_fin: new Date('2023-08-03'),
      alojamiento: 'Apartamento',
      transporte: 'Tren',
      num_personas: 3,
      servicio_adicional: 'Alquiler de bicicletas'
    },
    {
      fecha_inicio: new Date('2023-06-01'),
      fecha_fin: new Date('2023-07-21'),
      alojamiento: 'Hotel',
      transporte: 'Auto',
      num_personas: 4,
      servicio_adicional: 'Excursiones'
    },
    {
      fecha_inicio: new Date('2023-06-20'),
      fecha_fin: new Date('2023-08-03'),
      alojamiento: 'Apartamento',
      transporte: 'Tren',
      num_personas: 3,
      servicio_adicional: 'Alquiler de bicicletas'
    },
  ];

  nuevoCliente:any;
  nav: any;
  usuario: any;
  transporteTemp: any;
  mostrarDatos: boolean = false;

  @ViewChild('input', { static: true }) input!: ElementRef;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  user: any;
  userIndex: any;
  

  constructor(private router: Router, private service: PaqueteviajeService, private dialog: MatDialog, private _snackBar: MatSnackBar) { 

    this.nav = this.router.getCurrentNavigation();
    
    if (this.nav && this.nav.extras && this.nav.extras.state) {
      this.nuevoCliente = this.nav.extras.state;
      console.log(this.nuevoCliente.datosCliente.queryParams);
      this.dataSource.push(this.nuevoCliente.datosCliente.queryParams);
    }
    
  }
  
  transporteNuevo = new FormGroup({
    Transporte: new FormControl(['', Validators.required])
  })

  PaqueteConsultar = new FormGroup({
    Transporte: new FormControl(),
    Transaccion: new FormControl(),
  })

  
  buscarTransporte() {
    const filterValue = this.input.nativeElement.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 



  mostrarTodos(){
    //this.mostrarDatos = true;
    this.mostrarDatos = !this.mostrarDatos;
    console.log(this.data);
  }

  /*buscarTransporte(){
    this.transporteTemp = this.transporteNuevo.value.Transporte;
    console.log (this.transporteNuevo.value.Transporte);
    this.service.getPaquetebyTransporte(this.transporteTemp).subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<PaqueteViajeInterface>(data as PaqueteViajeInterface[]);
      console.log(data);
    },
    (errorData) => (alert("Usuario no autorizado")
    ,this.router.navigate(['/'])))
  }
  
  
  mostrarTodos(){
    this.PaqueteConsultar.value.Transaccion = "CONSULTAR_TODOS_EMPLEADOS";
    this.service.getPaqueteViajes(this.PaqueteConsultar.value as PaqueteViajeInterface).subscribe((data:any) => {
      this.dataSource = new MatTableDataSource<PaqueteViajeInterface>(data as PaqueteViajeInterface[]);
      console.log(data);
    },
    (errorData) => (alert("Usuario no autorizado")
    ,this.router.navigate(['/'])))
  }*/



  
  editRow(element: any) {
    const index = this.data.indexOf(element);
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: {
        user: element,
        userIndex: index
      }
    });
    console.log('Editando registro:', element);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.data[index] = result;
        this.dataSource = new MatTableDataSource<any>(this.data);
      }
    });
  
  }
  

  deleteRow(element: any) {
    const index = this.data.findIndex(usuario => usuario === element);
    if (index !== -1) {
      this.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<any>(this.data);
    }
    this._snackBar.open('El usuario fue eliminado con éxito','',{
      duration: 2000,
      horizontalPosition:'center',
      verticalPosition: 'bottom',
      })
  }

  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PaqueteViajeInterface>(this.data as PaqueteViajeInterface[]);
    console.log(this.data);
  }

  openDialogCreateUser(){
    const dialogRef = this.dialog.open(CreateUserComponent)
    dialogRef.componentInstance.registrosAgregados.subscribe((nuevosRegistros: any[]) => {
      this.agregarRegistros(nuevosRegistros);
    }); 
  }

  agregarRegistros(nuevosRegistros: any[]) {
    this.data.push(...nuevosRegistros);
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  
  /*applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/


}
