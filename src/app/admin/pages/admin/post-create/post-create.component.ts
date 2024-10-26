import {Component} from '@angular/core';
import {PostService} from "../../../services/post-service.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {IPost} from "../../../interfaces/post";
import {Router} from "@angular/router";

@Component({
    selector: 'app-post-create',
    standalone: true,
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './post-create.component.html',
    styleUrl: './post-create.component.scss'
})
export class PostCreateComponent {

    formGroup: FormGroup;
    iPost: IPost = {
        content: "",
        photo: "",
        published_at: "",
        title: ""
    }

    constructor(private postService: PostService, private fb: FormBuilder, private router: Router) {
        this.formGroup = this.fb.group({
            title: ['', [Validators.required]],
            content: ['', [Validators.required, Validators.min(8)]],
            published_at: ['', [Validators.required]]
        });
    }

    send() {
        if (!this.formGroup.invalid) {
            this.iPost.title = this.formGroup.get("title")?.value
            this.iPost.content = this.formGroup.get("content")?.value
            this.iPost.published_at = this.formGroup.get("published_at")?.value

            this.postService.savePost(this.iPost).subscribe({
                next: (response) => {
                    this.router.navigate(["/admin/post/list"]).then()
                },
                error: (error) => {
                    console.log(error)
                }
            });
        }
    }

}
