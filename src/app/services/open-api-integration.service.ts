import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpenApiResponse } from '../models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class OpenApiIntegrationService {

  constructor(private http: HttpClient) { }

  getOpenApiResult(){
    return this.http.get<OpenApiResponse>('http://api.icndb.com/jokes/random/3?exclude=[explicit]', {observe : 'body'});
  }
}
