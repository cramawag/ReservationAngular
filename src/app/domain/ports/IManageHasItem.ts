import { HasItem } from "../models/HasItem";
import {Observable} from "rxjs";

export interface IManageHasItem {
    getHasItems(): Observable<HasItem[]>;
    getHasItemById(id: string): Observable<HasItem>;
    searchHasItem(filter:string): Observable<HasItem[]>;
    addHasItem(hasItem: HasItem): Observable<HasItem>;
    updateHasItem(hasItem: HasItem): Observable<HasItem>;
    deleteHasItem(id: string): Observable<string>;
}