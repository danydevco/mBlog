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

    getPosts(){
        return this.http.get<IPost[]>("https://iub.danydev.co/api/posts");
    }

    savePost(iPost: IPost) {
        return this.http.post("https://iub.danydev.co/api/post/create", iPost)
    }

    getPost(id: number) {
        return this.http.get<IPost>(`https://iub.danydev.co/api/post/ver/${id}`)
    }

    deletePost(id: number) {
        return this.http.delete(`https://iub.danydev.co/api/post/delete/${id}`)
    }
}
