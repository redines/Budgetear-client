import { Component, OnInit } from '@angular/core';
import { SpendingsService } from 'api/api/spendings.service';
import { Spendings } from 'api';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {
  constructor(private spendingservice: SpendingsService) {}

  Result: Spendings[] = [];

  ngOnInit() {
    this.spendingservice.apiBudgetsGet().subscribe(function(res) {
      this.Result = res;
      console.log(this.Result);
    });
  }
}
