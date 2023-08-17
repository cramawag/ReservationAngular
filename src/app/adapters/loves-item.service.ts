import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { LovesItem } from '../domain/models/LovesItem';
import { IManageLovesItem } from '../domain/ports/IManageLovesItem';


@Injectable({
  providedIn: 'root'
})
export class LovesItemService{
  private lovesItemUrl = 'http://localhost:5156/lovesItem';

  constructor(private http:HttpClient) { }

  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};

  
}
