import {Injectable} from '@angular/core';
import {IPost} from "../interfaces/post";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    listPost: IPost[] = []

    constructor(
        private http: HttpClient
    ) { }

    /*
    async getPosts() {
        fetch("https://iub.danydev.co/api/posts")
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.listPost = data
            })
            .catch(error => {
                console.log(error)
            })

        return this.listPost
    }
    */

    getPosts(){
        return this.http.get<IPost[]>("https://iub.danydev.co/api/posts");
    }
}
