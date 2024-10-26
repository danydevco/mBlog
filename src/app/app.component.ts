import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./admin/components/navbar/navbar.component";
import {SidebarComponent} from "./admin/components/sidebar/sidebar.component";
import {ListPostComponent} from "./admin/components/list-post/list-post.component";
import {CreatePostComponent} from "./admin/components/create-post/create-post.component";
import {UpdatePostComponent} from "./admin/components/update-post/update-post.component";
import {ShowPostComponent} from "./admin/components/show-post/show-post.component";
import {IPost} from "./admin/interfaces/post";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent, ListPostComponent, CreatePostComponent, UpdatePostComponent, ShowPostComponent],
    providers: [HttpClient],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'mBlog';
    showPost: boolean = false;
    showCreatePost: boolean = false;
    showUpdatePost: boolean = false;
    showListPost: boolean = true;

    posts: IPost[] = [];

    showCreatePostComponent(event: boolean) {
        this.showCreatePost = true;
        this.showListPost = false;
        this.showUpdatePost = false;
        this.showPost = false;
    }

    showUpdatePostComponent(event: boolean) {
        this.showUpdatePost = true;
        this.showListPost = false;
        this.showCreatePost = false;
        this.showPost = false;
    }

    showListPostComponent(event: boolean) {
        this.showListPost = true;
        this.showCreatePost = false;
        this.showUpdatePost = false;
        this.showPost = false;
    }

    showPostComponent(event: boolean) {
        this.showPost = true;
        this.showListPost = false;
        this.showCreatePost = false;
        this.showUpdatePost = false;
    }

    createPost($event: IPost) {
        this.posts.push($event);
    }
}
