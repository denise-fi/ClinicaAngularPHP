import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
@Injectable({
  providedIn:'root'
})
export class RegistroComponent implements OnInit {



  endpoint: string;

  nombre = '';
  apellido = '';
  correo = '';
  numero = '';
  clave1 = '';
  clave2 = '';
  clave = '';

  forma: NgForm;


  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }

 
  ngOnInit(): void {
   this.endpoint = '/datab/';
   if(this.clave1 == this.clave2){
    this.clave=this.clave1;
  }
  }
  loading = false;
  RegistroUser(){
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);

    const postVars = {
      nombre : this.nombre,
      apellido : this.apellido,
      correo : this.correo,
      numero : this.numero,
      clave : this.clave,
    };

    // You may also want to check the response. But again, let's keep it simple.
    this.http.post(`${this.endpoint}mensaje.php`, postVars)
        .subscribe(
            response => console.log(response),
            response => console.log(response)

        );
  }


/*
  agregar(articulo) {
    return this.http.post('', JSON.stringify(articulo));
  }
*/

}
