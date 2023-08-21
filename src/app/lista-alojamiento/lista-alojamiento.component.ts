import { Component } from '@angular/core';


export interface reservaAlojamientoInterface { 
  nombre_cliente: string,
  nombre_hotel: string,
  fecha_llegada: string,  
  fecha_salida: string,
  direccion: string,
  telefono: string,
  destino: string,
}

const Reserva_data: reservaAlojamientoInterface[] = [
  {nombre_cliente: 'Jose' , nombre_hotel: 'Hotel casona de la ronda', fecha_llegada: '21/08/2023', fecha_salida: '27/08/2023',direccion: 'Calle Morales OE1- 160 Centro Histórico',telefono: '(02) 228-7501', destino:'Quito' },
];

@Component({
  selector: 'app-lista-alojamiento',
  templateUrl: './lista-alojamiento.component.html',
  styleUrls: ['./lista-alojamiento.component.css']
})
export class ListaAlojamientoComponent {
  dataSource: any = Reserva_data;
  displayedColumns: string[] = ['nombre_cliente', 'nombre_hotel', 'fecha_llegada', 'fecha_salida', 'direccion', 'telefono', 'destino'];

  // mostrarTodos()
  // {
  //   this.alojamiento.value.transaccion = "CONSULTAR_TODAS_RESERVAS_ALOJAMIENTO";

  //   this.service_alojamiento.getAlojamiento(this.alojamiento.value as reservaAlojamientoInterface).subscribe((data:any) =>{
  //     this.dataSource = new MatTableDataSource<reservaAlojamientoInterface>(data as reservaAlojamientoInterface[]);
  //     console.log(data);
  //     },
  //     (errorData) => (alert("Usuario No autorizado"),
  //     this.router.navigate(['/'])))
  // }
}