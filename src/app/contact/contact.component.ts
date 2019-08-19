import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
mail: string;
domain: string;
  constructor() {
  this.mail= "baertschi91"
  this.domain="gmail.com"
 }

  ngOnInit() {
  }

}
