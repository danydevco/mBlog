import {Component} from '@angular/core';
import {PostService} from "../../../services/post-service.service";
import {IPost} from "../../../interfaces/post";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-post-list',
    standalone: true,
    imports: [
        NgForOf
    ],
    templateUrl: './post-list.component.html',
    styleUrl: './post-list.component.scss'
})
export class PostListComponent {

    listPost: IPost[] = []

    constructor(private postService: PostService) {
        this.postService.getPosts().subscribe({
            next: (posts) => {
                this.listPost = posts
                console.log(this.listPost)
            },
            error: (error) => {
                console.log(error)
            }
        })
    }

}
