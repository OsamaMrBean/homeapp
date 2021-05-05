import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  card = [{
      img: 'assets/img/elec1.png',
      title: 'Epson EcoTank L3150 Wi-Fi All-in-One Ink',
      price: '229.99$'
    },
    {
      img: 'assets/img/elec2.png',
      title: 'Lenovo Desktop Tower V50S 11HBS00J00 I3 10100 4GB RAM, 1TB HDD, DOS & 3Years Warranty',
      price: '449$'
    },
    {
      img: 'assets/img/elec3.png',
      title: 'Acer Laptop Aspire 3 A315 42 R3 3200U 4GB 1TB W10 15.6INCH',
      price: '573.99$'
    },
    {
      img: 'assets/img/elec4.png' ,
      title: 'Dell Desktop Optiplex 3080 TM Ci3 10100 4GB 1TB NO ODD Ubundu E2020H 19.5inch',
      price: '899.99$'
    }
  ];

  card1 = [{
      img: 'assets/img/sm1.png',
      title: 'Vivo S1 Pro (Black,8GB RAM, 128GB Storage)',
      price: '299$'
    },
    {
      img: 'assets/img/sm4.png',
      title: 'Samsung Mobile G980FLBD Galaxy S20 8GB RAM 128GB Storage Light Blue',
      price: '1049$'
    },
    {
      img: 'assets/img/sm5.png',
      title: 'Iphone 11(128gb, product red)',
      price: '699$'
    },
    {
      img: 'assets/img/sm6.png' ,
      title: 'SAMSUNG Metro Dual Sim (black) ',
      price: '35$'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
