import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PurchasesService } from 'api/api/purchases.service';
import { Purchases } from 'api';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  constructor(private purchasesService: PurchasesService) {}

  Result: Purchases[] = [];

  PurchasesForm = new FormGroup({
    cost: new FormControl(''),
    name: new FormControl(''),
    type: new FormControl(''),
    category: new FormControl('')
  });

  addPurchase: Purchases = {};

  ngOnInit() {
    this.purchasesService.apiBudgetsGet().subscribe(function(res) {
      this.Result = res;
      console.log(this.Result);
    });
  }

  onSubmit(): void {
    console.log('submited form');
    console.log(this.PurchasesForm.value);

    this.purchasesService
      .apiBudgetsPost(this.PurchasesForm.value)
      .subscribe(resp => {
        console.log('resp', resp);
      });
  }
}
