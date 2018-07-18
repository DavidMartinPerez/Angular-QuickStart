import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../Servicios/peticiones.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css'],
  providers: [PeticionesService]
})
export class HttpClientComponent implements OnInit {
  public posts:any;
  public postsId:any;
  public msgError:string;
  public fecha: any;
  public new_user: any;
  public usuarioGuardado: any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.postsId = 1;
    this.new_user = {
      "name": "",
      "job": ""
    }
  }

  ngOnInit() {
    this.fecha = new Date(2019,5,20);
    this.cargaPost();
    console.log("cargando HttpClientComponent")
  }
  cargaPost(){
    this.posts = "";
    this._peticionesService.getUser(this.postsId).subscribe(
      (result) => {
        this.msgError = "Cargado!";
        console.log(result);
        this.posts = result;
      },
      (error) => {
        this.msgError = "No existe este post...";
        this.posts = "";
      }
    );
  }
  onSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
      (result) => {
        console.log(result);
        this.usuarioGuardado = result;
      },
      (error) =>{
        console.log(<any>error);
      }
    )
  }

}
