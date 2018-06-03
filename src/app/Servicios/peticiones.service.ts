import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
    public url:string;

    constructor(
        public _http: HttpClient,
    ){
        this.url = "https://jsonplaceholder.typicode.com/";
    }
    getUser(id):Observable<any>{
        return this._http.get(this.url + 'posts/'+id);
    }
    addUser(user):Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post('https://reqres.in/api/useres',params,{headers: headers});
    }
}
