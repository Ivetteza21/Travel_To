import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ClienteInterface } from "./app/interfaces/clienteinterface";

@Injectable({
    providedIn: 'root'
})

export class ClienteService {
    
    baseUrl: string = 'http://localhost:3700/api/cliente/SetCliente';
    
    constructor(private http: HttpClient){   }

    setClientes(clientes: ClienteInterface){
        let auth_token = localStorage.getItem('token_value');
        const header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `bearer ${auth_token}`
        })
                        
        return this.http.post(this.baseUrl, clientes, {headers: header});        
    }
    
}
