import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {MessageFlashService} from "../../../shared/components/message-flash/message-flash.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    formGroup: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private messageFlashService: MessageFlashService
    ) {
        this.formGroup = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.min(8)]]
        });
    }

    send() {
        console.log(this.formGroup.value)
        if (this.formGroup.valid) {
            this.authService.login(this.formGroup.value.username, this.formGroup.value.password)
                .subscribe({
                    next: (response) => {
                        if (response.successful) {
                            localStorage.setItem('token', response.data.token);
                            localStorage.setItem('user', JSON.stringify(response.data));
                            this.router.navigate(['admin', 'post', 'list']).then();
                        } else {
                            this.messageFlashService.danger(response.message)
                        }
                    },
                    error: (error) => {
                        console.log(error)
                        this.messageFlashService.danger(error.message)
                    }
                });
        }
    }


}
