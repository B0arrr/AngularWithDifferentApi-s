import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExpressService} from "../../../services/express.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private expressService: ExpressService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required]
    });
  }

  get f(): any {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const FirstName = this.f['FirstName'].value;
    const LastName = this.f['LastName'].value;

    this.loading = true;
    this.expressService.createUser({ FirstName, LastName }).subscribe({
      next: () => {
        console.log('added')
        this.loading = false;
      },
      error: (error) => {
        console.error(error)
        this.loading = false;
      }
    });
  }
}
