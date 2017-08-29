import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IApi } from "./apiInterface";
import 'rxjs';


export class GenricApi<Model> implements IApi<Model>{


    constructor(private key: string,
        private http: Http) {
        this.key = `/api/${this.key}`
    }

    create(Model: Model): Observable<Model> {

        return this.http
            .post(this.key, Model)
            .map(response => {

                if (response.status !== 200 || response.statusText !== "OK") {
                    throw "response not valid"
                }

                let res = JSON.parse(response["_body"]);

                if (res.error ||  !res.isSuccess) {
                    throw res.error || "response not valid"
                }
                return res.data
            })
            .catch(err => {
                throw err
            });
    }


    update(id: string,Model: Model): Observable<Model> {

        return this.http
            .put(this.key+`/${id}`, Model)
            .map(response => {
             
                if (response.status !== 200 || response.statusText !== "OK") {
                    throw "response not valid"
                }

                let res = JSON.parse(response["_body"]);

                if (res.error ||  !res.isSuccess) {
                    throw res.error || "response not valid"
                }
                return res.data
            })
            .catch(err => { throw err });
    }


    delete(id:string): Observable<Model> {
        return this.http
            .delete(this.key + `/${id}`)
            .catch(err => { 
                throw err
             });
    }


    get(id: string): Observable<Model> {

        return this.http
            .get(this.key + `/${id}`)
            .map(response => {

                if (response.status !== 200 || response.statusText !== "OK") {
                    throw "response not valid"
                }

                let res = JSON.parse(response["_body"]);

                if (res.error || !res.isSuccess) {
                    throw res.error || "response not valid"
                }
                return res.data
            })
            .catch(err => { throw err });
    }


    search(options: object): Observable<Array<Model>> { // to do as Array

        return this.http
            .get(this.key, options)
            .map(response => {

                if (response.status !== 200 || response.statusText !== "OK") {
                    throw "response not valid"
                }

                let res = JSON.parse(response["_body"]);

                if (res.error || !res.isSuccess) {
                    throw res.error || "response not valid"
                }
                return res.items
            })
            .catch(err => { throw err });
    }

} 