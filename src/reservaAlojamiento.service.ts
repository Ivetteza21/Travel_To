import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { reservaAlojamientoInterface } from "./app/interfaces/reservaAlojamientoInterface";

@Injectable({
    providedIn: 'root'
})

export class ReservaAlojamientoService {
    
    baseUrl: string = 'http://localhost:3700/api/reserva_alojamientos/GetAlojamiento';

    constructor(private http: HttpClient){   }

    getAlojamiento(alojamientos: reservaAlojamientoInterface){
        let auth_token = localStorage.getItem('token_value');
        const header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `bearer ${auth_token}`
        })
                        
        return this.http.post(this.baseUrl, alojamientos, {headers: header});        
    }
    
}