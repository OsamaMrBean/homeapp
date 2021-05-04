import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  img1 = 'assets/img/elec1.png'  
  img2 = 'assets/img/elec2.png'  
  img3 = 'assets/img/elec3.png'
  img4 = 'assets/img/elec4.png'  
  
  cad1 = 'assets/img/sm1.png'
  cad2 = 'assets/img/sm4.png'
  cad3 = 'assets/img/sm5.png'
  cad4 = 'assets/img/sm6.png'
  constructor() { }

  ngOnInit(): void {
  }

}
