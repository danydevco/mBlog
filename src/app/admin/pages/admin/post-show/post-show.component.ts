import {Component} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {PostService} from "../../../services/post-service.service";
import {IPost} from "../../../interfaces/post";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-post-show',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink
    ],
    templateUrl: './post-show.component.html',
    styleUrl: './post-show.component.scss'
})
export class PostShowComponent {

    iPost: IPost = {} as IPost;

    constructor(private route: ActivatedRoute, private postService: PostService) {
        const id = this.route.snapshot.paramMap.get('id');
        this.getPost(parseInt(id || '0'));
    }

    getPost(id: number) {
        this.postService.getPost(id).subscribe({
            next: (post) => {
                this.iPost = post
            },
            error: (error) => {
                console.log(error)
            }
        })
    }
}
