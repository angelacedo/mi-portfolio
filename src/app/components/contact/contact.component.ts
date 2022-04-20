import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit
{

  public contactEmailForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private apiService:ApiService)
  {
    this.contactEmailForm = this.formBuilder.group({
      name: ['', [Validators.max(15), Validators.required]],
      surnames: ['', [Validators.max(20), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      message: ['', [Validators.minLength(30), Validators.maxLength(1000), Validators.required]],
    }

    );
  }

  ngOnInit(): void
  {
  }

  sendEmail()
  {
    this.apiService.sendEmail(this.contactEmailForm.value.name, this.contactEmailForm.value.surnames, this.contactEmailForm.value.email, this.contactEmailForm.value.message ).subscribe(data => {
      console.log(data)
    })
  }

}
