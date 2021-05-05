import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  name = '';
  msg = 'Thank You for leaving us a message,'
  constructor() { }

  ngOnInit(): void {
  }

}
