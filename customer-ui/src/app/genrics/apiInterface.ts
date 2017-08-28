import { GenricApi } from "./api";
import { Observable } from "rxjs/Observable";

export interface IApi<Model> {
    create(Model: Model): Observable<Model>;
    update(Model: Model, options: object): Observable<Model>;
    delete(id: string): Observable<Model>;
    get(id: string): Observable<Model>;
    search(options: object): Observable<Array<Model>>;
}