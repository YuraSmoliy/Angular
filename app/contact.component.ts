import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
 
 
@Component({
    selector: 'contact-app',
	styleUrls: ['app/contact.component.css'],
    /*styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],*/
    template: `<form class="form" [formGroup]="myForm" novalidate (ngSubmit)="submit()">
                    <div class="form-group">
                        <label>Name</label>
                        <input class="form-control" name="name" formControlName="userName" />
                         
                        <div class="alert alert-danger"
                            *ngIf="myForm.controls['userName'].invalid && myForm.controls['userName'].touched">
                            Не указано имя
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" name="email" formControlName="userEmail" />
                         
                        <div class="alert alert-danger"
                            *ngIf="myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched">
                            Некорректный email
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Massage</label>
                        <input class="form-control" name="massage" formControlName="userMassage" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-default" [disabled]="myForm.invalid">
                            Отправить
                        </button>
                    </div>
                </form>`
})
export class ContactComponent{ 
    myForm : FormGroup;
    constructor(){
        this.myForm = new FormGroup({
             
            "userName": new FormControl("Name", Validators.required),
            "userEmail": new FormControl("email", [
                                Validators.required, 
                                Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}") 
                            ]),
            "userMassage": new FormControl("Massage", Validators.required)
        });
    }
     
    submit(){
        console.log(this.myForm);
    }
}