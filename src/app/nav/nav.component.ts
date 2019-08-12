import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit   {
  constructor(private router: Router) {}

  ngOnInit() {}

   navigateTo(link: string): void {
     this.router.navigateByUrl(link);
   }
}
