import { Component, OnInit } from '@angular/core';
import { contactoUsuario } from '../../modelos/contacto.usuario';

@Component({
  selector: 'app-conctato',
  templateUrl: './conctato.component.html',
  styleUrls: ['./conctato.component.css']
})
export class ConctatoComponent implements OnInit {
  public usuario:contactoUsuario;
  constructor() {
    this.usuario = new contactoUsuario('','','','');
  }

  ngOnInit() {
  }
  onSubmit(form){
    console.log(this.usuario);
  }

}
