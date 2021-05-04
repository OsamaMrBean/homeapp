import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  img1 = 'assets/img/tv1.png'  
  img2 = 'assets/img/tv2.png'  
  img3 = 'assets/img/tv3.png'
  img4 = 'assets/img/tv4.png'  
  
  cad1 = 'assets/img/app1.png'
  cad2 = 'assets/img/app3.png'
  cad3 = 'assets/img/app2.png'
  cad4 = 'assets/img/card3.png'
  cad5 = 'assets/img/card5.png'
  cad6 = 'assets/img/card6.png'
  constructor() { }

  ngOnInit(): void {
  }

}
