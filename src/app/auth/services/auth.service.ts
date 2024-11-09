import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IApiResponse} from "../../core/interfaces/api.interface";
import {ILoginResponse} from "../../core/interfaces/auth.interface";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private api = 'https://iub.danydev.co';
    constructor(private http: HttpClient) {}
    login(username: string, password: string): Observable<IApiResponse<ILoginResponse>> {
        return this.http.post<IApiResponse<ILoginResponse>>(`${this.api}/api/auth/login`, {
            username,
            password
        });
    }
}
