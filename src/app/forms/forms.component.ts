import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpendingsService } from 'api/api/spendings.service';
import { Spendings } from 'api';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {
  constructor(private spendingservice: SpendingsService) {}

  PurchasesForm: FormGroup;

  Result: Spendings[] = [];

  ngOnInit() {
    this.PurchasesForm = new FormGroup({
      cost: new FormControl(),
      name: new FormControl(),
      type: new FormControl(),
      category: new FormControl()
    });

    this.spendingservice.apiBudgetsGet().subscribe(function(res) {
      this.Result = res;
      console.log(this.Result);
    });
  }

  onSubmit(): void {
    console.log('submited form');
    console.log(this.PurchasesForm.value);
    this.spendingservice.apiBudgetsPost(this.PurchasesForm.value);
  }
}
