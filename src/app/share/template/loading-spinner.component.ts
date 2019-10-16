import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading-spinner',
  template: `
  <ngx-spinner
      bdColor="#22222275"
      size="large"
      color="#197bd2"
      type="ball-spin-clockwise">
      <p style="font-size: 20px; color: white"></p>
  </ngx-spinner>
  `,
})
export class LoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
