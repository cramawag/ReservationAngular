import { LovesItem } from "../models/LovesItem";
import {Observable} from "rxjs";

export interface IManageLovesItem {
    getLovesItems(): Observable<LovesItem[]>;
    getLovesItemById(id: string): Observable<LovesItem>;
    searchLovesItem(filter:string): Observable<LovesItem[]>;
    addLovesItem(lovesItem: LovesItem): Observable<LovesItem>;
    updateLovesItem(lovesItem: LovesItem): Observable<LovesItem>;
    deleteLovesItem(id: string): Observable<LovesItem>;
}