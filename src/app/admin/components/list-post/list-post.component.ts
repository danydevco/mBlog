import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPost} from "../../interfaces/post";
import {CommonModule, NgFor} from "@angular/common";

@Component({
    selector: 'app-list-post',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './list-post.component.html',
    styleUrl: './list-post.component.scss'
})
export class ListPostComponent {
    @Input() posts: IPost[] = [];
    @Output() createPost = new EventEmitter<boolean>();


    showCreatePostComponent() {
        this.createPost.emit(true);
    }
}
