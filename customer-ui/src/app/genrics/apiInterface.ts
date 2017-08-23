import { GenricApi } from "./api";
import { Observable } from "rxjs/Observable";

export interface IApi<Model> {
    get(path: string, options: object): Observable<Model>;
    search(path: string, options: object): Observable < Array < Model > >;
    create(model: Model, path: string): Observable<Model> ;
    update(model: Model, path: string, options: object): Observable<Model>;
    delete(path: string, options: object): Observable<Model>;
}