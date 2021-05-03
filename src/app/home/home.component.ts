import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img1 = 'assets/img/cour1.png'  
  img2 = 'assets/img/cour2.png'  
  img3 = 'assets/img/cour3.png'
  img4 = 'assets/img/cour4.png'  
  
  cad1 = 'assets/img/card1.png'
  cad2 = 'assets/img/card2.png'
  cad3 = 'assets/img/card3.png'
  cad4 = 'assets/img/card4.png'
  cad5 = 'assets/img/card5.png'
  cad6 = 'assets/img/card6.png'

  constructor() { }

  ngOnInit(): void {
  }
}
