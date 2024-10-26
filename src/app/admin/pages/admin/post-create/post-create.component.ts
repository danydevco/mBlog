import { Component } from '@angular/core';
import {PostService} from "../../../services/post-service.service";

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss'
})
export class PostCreateComponent {

    constructor(private postService: PostService) {

    }

}
