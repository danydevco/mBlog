import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {MessageFlashService} from "../../shared/components/message-flash/message-flash.service";
import {catchError, throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    api = 'https://iub.danydev.co';

    constructor(private http: HttpClient, private messageFlash: MessageFlashService) { }

    getEndPoint(endpoint: string) {
        return `${this.api}/${endpoint}`;
    }

    get<T>(path: string) {
        const headers = this.getHttpHeader();
        const endpoint = this.getEndPoint(path);

        return this.http.get<T>(endpoint, { headers }).pipe(
            catchError((error) => this.handleError(error))
        );
    }

    post<T>(path: string, body: any) {
        const headers = this.getHttpHeader();
        const endpoint = this.getEndPoint(path);
        return this.http.post<T>(endpoint, body, { headers }).pipe(
            catchError((error) => this.handleError(error))
        )
    }

    put<T>(path: string, body: any) {
        const headers = this.getHttpHeader();
        const endpoint = this.getEndPoint(path);
        return this.http.put<T>(endpoint, body, { headers }).pipe(
            catchError((error) => this.handleError(error))
        )
    }

    delete<T>(path: string) {
        const headers = this.getHttpHeader();
        const endpoint = this.getEndPoint(path);
        return this.http.delete<T>(endpoint, { headers }).pipe(
            catchError((error) => this.handleError(error))
        )
    }

    private handleError(error: HttpErrorResponse) {
        if ('successful' in error.error) {
            this.messageFlash.danger(error.error.message);
        }else{
            this.messageFlash.danger('Error en el servidor');
        }

        return throwError('Ocurrio un error')
    }

    private getHttpHeader() {
        const headers: { [key: string]: string } = {
            'Content-Type': 'application/json'
        }

        const token = this.getToken();

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        return headers;

    }

    private getToken() {
        return localStorage.getItem('token');
    }
}
