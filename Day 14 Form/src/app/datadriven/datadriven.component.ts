import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { FormserviceService } from "../formservice.service";

@Component({
  selector: 'app-datadriven',
  templateUrl: './datadriven.component.html',
  styleUrls: ['./datadriven.component.css']
})
export class DatadrivenComponent  {
  db: FormserviceService;

  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, service: FormserviceService) { 
    this.db = service;
    this.myForm = formBuilder.group({
        'name': ['Asaad', [Validators.required]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
      'post': ['', Validators.maxLength(10)],
      });
  }


  

onSubmit() {
    console.log(this.myForm);
  }

  getDataform(){
 this.db.getData().subscribe(data=>{ this.myForm.setValue( {'name': data.json().name, 'email': data.json().email, 'post': data.json().username});
  })
}
}
