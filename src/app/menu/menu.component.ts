import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'menuComponent',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items: NbMenuItem[] = [
    {
      title: 'Inicio',
      expanded: true,
      children: [
        {
          title: 'Inicio',
          link: '/'
        },
        {
          title: 'Dashboard',
          link: 'dashboard'
        },
      ],
    },
   
    {
      title: 'Login',
      children: [
        {
          title: 'Iniciar Sesion',
          link: 'login'
        },
        {
          title: 'Registro',
          link: 'registro'
        },
        {
          title: 'Cambiar Clave',
          link: 'cambiarClave'
        },
       
      ],
    },
    {
      title: 'perros',
      children: [
        {
          title: 'Iniciar Sesion',
          link: 'login'
        },
        {
          title: 'Registro',
          link: 'registro'
        },
        {
          title: 'Cambiar Clave',
          link: 'cambiarClave'
        },
       
      ],
    },
  ];
  

}
