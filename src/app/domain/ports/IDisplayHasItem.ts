import { HasItem } from "../models/HasItem";
import {Observable} from "rxjs";

export default interface IDisplayHasItem {
    hasItems: HasItem[];
    filter:string;

    askHasItems():Observable<void>
    askHasItemsFiltered(filter:string,allowEmpty?:boolean):Observable<void>
}