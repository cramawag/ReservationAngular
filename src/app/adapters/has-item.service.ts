import { Injectable } from '@angular/core';
import { HasItem } from '../domain/models/HasItem';
import { IManageHasItem } from '../domain/ports/IManageHasItem';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,catchError,map} from 'rxjs';
import { HasItemOperationError } from '../domain/errors/HasItemOperationError';

@Injectable({
  providedIn: 'root'
})
export class HasItemService implements IManageHasItem{
  private hasItemUrl = 'http://localhost:5156/hasItem';
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};
  constructor(private http:HttpClient) { }

  private handleHttpError(){
    return (error: any): Observable<any> => {
      throw new HasItemOperationError(error.body.error);
    }
  }
  getHasItems(): Observable<HasItem[]> {
    return this.http.get<HasItem[]>(this.hasItemUrl)
    .pipe(catchError(this.handleHttpError()));
  }

  getHasItemById(id: string): Observable<HasItem> {
    const url = `${this.hasItemUrl}/${id}`;
    return this.http.get<HasItem>(url)
    .pipe(catchError(this.handleHttpError()));
  }

  searchHasItem(filter: string): Observable<HasItem[]> {
    return this.http.get<HasItem[]>(`this.hasItemUrl/?name=${filter}`)
    .pipe(catchError(this.handleHttpError()));
  }

  addHasItem(hasItem: HasItem): Observable<HasItem> {
    return this.http.post<HasItem>(this.hasItemUrl,hasItem,this.httpOptions)
    .pipe(catchError(this.handleHttpError()));
  }

  updateHasItem(hasItem: HasItem): Observable<HasItem> {
    return this.http.put<HasItem>(this.hasItemUrl,hasItem,this.httpOptions)
    .pipe(catchError(this.handleHttpError()),
    map(_ => hasItem));
  }

  deleteHasItem(id: string): Observable<string> {
    const url = `${this.hasItemUrl}/${id}`;
    return this.http.delete<HasItem>(url,this.httpOptions)
    .pipe(catchError(this.handleHttpError()),
    map(_ => id))
  }
}
