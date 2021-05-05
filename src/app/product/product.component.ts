import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  card = [{
      img: 'assets/img/tv1.png',
      title: 'Sony 75" KD-75X8000H 4K UHD Smart Android LED TV',
      price: '899$'
    },
    {
      img: 'assets/img/tv2.png',
      title: 'Amazon Fire TV Lite W Alexa Voice Remote 3rd Gen',
      price: '69$'
    },
    {
      img: 'assets/img/tv3.png',
      title: 'Haier 32" HD Ready LED TV+LG 2.1 Channel Bluetooth Home Theatre',
      price: '573.99$'
    },
    {
      img: 'assets/img/tv4.png' ,
      title: 'Haier 108cm 43 Inch Full HD Smart LED TV',
      price: '899.99$'
    }
  ];

  card1 = [{
      img: 'assets/img/app1.png',
      title: 'LG 687 L Side by side Refrigerator with Inverter Linear Compressor and Express Freezing Smart Diagnosis',
      price: '1299$'
    },
    {
      img: 'assets/img/app3.png',
      title: 'Haier 565 L Frost Free Side by Side Refrigerator',
      price: '1049$'
    },
    {
      img: 'assets/img/app2.png',
      title: 'Bosch 7.5Kg WOE754C1IN Fully Automatic Top Load Washing Machine',
      price: '600.19$'
    },
    {
      img: 'assets/img/card3.png' ,
      title: 'LG 1.5 Ton 3 Star Inverter Split AC ',
      price: '799$'
    }
  ];

  card2 = [{
      img: 'assets/img/card5.png',
      title: 'Hitachi AC 1.5Ton SHIZEN 3100S Champion 3 Star Inverter',
      price: '699$'
    },
    {
      img: 'assets/img/card6.png',
      title: 'BLUESTAR 1.5 Ton 3 Star Inverter Split AC',
      price: '694$'
    },
    {
      img: 'assets/img/card3.png',
      title: 'LG 1 Ton 3 Star Inverter Split AC',
      price: '999$'
    },
    {
      img: 'assets/img/app2.png' ,
      title: 'Bosch 10Kg WOE754C1IN Fully Automatic Top Load Washing Machine',
      price: '499$'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
