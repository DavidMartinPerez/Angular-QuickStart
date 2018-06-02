import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {
  public nombre:string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>
      this.nombre = params.nombre
  )}
  redirigir(){
    this._router.navigate(['/consolas'])
  }
}
