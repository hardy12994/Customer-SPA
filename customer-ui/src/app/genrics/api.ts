import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IApi } from "./apiInterface";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';




export class GenricApi<Model> implements IApi<Model>{


    constructor(private key:string,
        private http: Http) { 

    }

    create(model: Model, path: string): Observable<Model> {
        let url = `/api/${this.key}`;


        return this.http
            .post(url, model)
            .map(response => {
                return response
            })
            .catch(err => { throw err });
    }


    update(model: Model, path: string, options: object): Observable<Model> {
        return this.http
            .put(path, model, options)
            .map(response => {
                return response
            })
            .catch(err => { throw err });
    }


    delete(path: string, options: object): Observable<Model> {
        return this.http
            .delete(path, options)
            .map(response => {
                return response
            })
            .catch(err => { throw err });
    }


    get(path: string, options: object): Observable<Model> {
        return this.http
            .get(path, options)
            .map(response => {
                return response
            })
            .catch(err => { throw err });
    }



    search(path: string, options: object): Observable < Array < Model > > { // to do as Array
        return this.http
            .get(path, options)
            .map(response => {
                return response
            })
            .catch(err => { throw err });
    }

} 