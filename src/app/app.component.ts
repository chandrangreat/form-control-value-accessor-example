import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({
     value: new FormControl(false)
  })

  constructor() {
    this.form.valueChanges.subscribe(console.error);
  }
}
