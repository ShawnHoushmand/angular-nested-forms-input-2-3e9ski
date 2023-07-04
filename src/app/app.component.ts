import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
  addressForm = this.formBuilder.group({
    street: ["PayneStreet"],
    zip: [50000]
  });

  mainForm: FormGroup = this.formBuilder.group({
    name: ["Max"],
    address: this.addressForm
  });

  constructor(private formBuilder: FormBuilder) {
    console.clear();
  }
}
