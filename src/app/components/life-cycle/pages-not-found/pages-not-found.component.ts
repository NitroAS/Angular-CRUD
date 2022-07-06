import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="Container">
      <div>404: Page Not Found</div>
      <div>
        We couldn't find that page! Not even with x-ray vision.
      </div>
      <div>
        <button mat-raised-button color="primary" routerLink="/">
          Take Me Home
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
    
    `,
  ],
})
export class PagesNotFoundComponent implements OnInit {

ngOnInit(): void {

}
}



