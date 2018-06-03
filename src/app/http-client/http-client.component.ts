import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../Servicios/peticiones.service';

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

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.postsId = 1;
  }

  ngOnInit() {
    this.cargaPost()
  }
  cargaPost(){
    this.posts = "";
    this._peticionesService.getUser(this.postsId).subscribe(
      result => {
        this.msgError = "Cargado!";
        console.log(result);
        this.posts = result;
      },
      error => {
        this.msgError = "No existe este post...";
        this.posts = "";
      }
    );
  }

}
