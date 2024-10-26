import {Component} from '@angular/core';
import {PostService} from "../../../services/post-service.service";
import {IPost} from "../../../interfaces/post";
import {NgForOf} from "@angular/common";
import {MessageFlashService} from "../../../../shared/components/message-flash/message-flash.service";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-post-list',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink
    ],
    templateUrl: './post-list.component.html',
    styleUrl: './post-list.component.scss'
})
export class PostListComponent {

    listPost: IPost[] = []

    constructor(
        private postService: PostService,
        private messageFlashService: MessageFlashService
    ) {
        this.getPost()
    }

    delete(id: number) {
        this.postService.deletePost(id).subscribe({
            next: (response) => {
                this.listPost = this.listPost.filter(post => post.id !== id)
                this.messageFlashService.success(
                    "Post deleted successfully"
                )
                this.getPost()
            },
            error: (error) => {
                this.messageFlashService.danger(
                    "Error: " + error.message
                )
            }
        })
    }

    getPost(){
        this.postService.getPosts().subscribe({
            next: (posts) => {
                this.listPost = posts
            },
            error: (error) => {
                this.messageFlashService.danger(
                    "Error: " + error.message
                )
            }
        })
    }
}
