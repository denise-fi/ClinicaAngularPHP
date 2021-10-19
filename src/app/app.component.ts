import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service'; 
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Usuarios dashboard';
  usuario = null;

  user = {
    id_usuario: null,
    nombre: null,
    apellido: null,
    correo: null,
    numero: null,
    clave: null
  }
  constructor(private usuariosService: UsuariosService ){

  }
  ngOnInit() {
    this.MostrarTodos();
  }
  hayRegistros(){
    return true;
  }
  MostrarTodos() {
    this.usuariosService.mostrarTodos().subscribe(result => this.usuario = result);
  }
  Agregar(){
    this.usuariosService.agregar(this.user).subscribe(datos =>{
      if(datos['resultado'] === 'OK') {
        alert(datos['mensaje']);
        this.MostrarTodos();
      }
      
    });
  }
  Eliminar(id_usuario){
    this.usuariosService.eliminar(id_usuario).subscribe(datos =>{
      if(datos['resultado'] === 'OK') {
        alert(datos['mensaje']);
        this.MostrarTodos();
      }
    });
  }
  Modificar(){
    console.log("se presiono modificar");
    this.usuariosService.update(this.user).subscribe(datos =>{
      if(datos['resultado'] === 'OK') {
        alert(datos['mensaje']);
        this.MostrarTodos();
      }
      
    });
  }
  Seleccionar(id_usuario){
    this.usuariosService.seleccionar(id_usuario).subscribe(datos =>
     this.user = datos[0]);
  }
}
