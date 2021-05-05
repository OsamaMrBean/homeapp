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
  
  card = [{
    img: 'assets/img/card1.png',
    title: 'HP 15s Core i3 10th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home)',
    price: '799$'
  },
  {
    img: 'assets/img/card2.png',
    title: 'JBL T110BT Wireless Pure Bass Bluetooth Headset with Mic (Blue, In the Ear) (JBLBHPTUNE110BT)',
    price: '39$'
  },
  {
    img: 'assets/img/card3.png',
    title: 'Symphony 41L Room/Personal Air Cooler White',
    price: '299$'
  },
  {
    img: 'assets/img/card1.png',
    title: 'HP 15s Core i7 10th Gen - (16 GB/1 TB HDD/256 GB SSD/Windows 10 Home)',
    price: '1099$'
  }
]

card1 = [{
    img: 'assets/img/card4.png',
    title: 'LG 1.5 Ton 3 Star Inverter Split AC (1.5TMSQ18JNXA3S)',
    price: '799$'
  },
  {
    img: 'assets/img/card5.png',
    title: 'Hitachi AC 1.5Ton SHIZEN 3100S Champion 3 Star Inverter',
    price: '699$'
  },
  {
    img: 'assets/img/card6.png',
    title: 'BLUESTAR 1.5 Ton 3 Star Inverter Split AC ',
    price: '649$'
  }
]

  constructor() { }

  ngOnInit(): void {
  }
}
