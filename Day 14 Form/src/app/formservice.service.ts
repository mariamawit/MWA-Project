import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FormserviceService {

  constructor(public http: Http) { 

  }

  getData(){
    return this.http.get('http://jsonplaceholder.typicode.com/users/1');
  }

}
