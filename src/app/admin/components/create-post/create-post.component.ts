import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {IPost} from "../../interfaces/post";

@Component({
    selector: 'app-create-post',
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: './create-post.component.html',
    styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
    @Output() showPosts = new EventEmitter<boolean>()
    @Output() eventPost = new EventEmitter<IPost>()

    post: IPost = {
        id: 0,
        title: '',
        description: '',
        date: '',
        photo: ''
    }

    showListPost() {
        this.showPosts.emit(true);
    }

    savePost() {
        this.showPosts.emit(true);
        this.eventPost.emit(this.post);
    }
}
