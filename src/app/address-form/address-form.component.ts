import { Component, OnInit, forwardRef, OnDestroy, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.css"]
})
export class AddressFormComponent {
  @Input() addressForm: FormGroup;
}
