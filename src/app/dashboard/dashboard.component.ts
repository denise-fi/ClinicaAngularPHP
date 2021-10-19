import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
articulos =null;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://scratchya.com.ar/vue/datos.php")
    .subscribe(
      result => {
        this.articulos = result;
      },
      error => {
        console.log('problemas');
      }
    );
  }

}
