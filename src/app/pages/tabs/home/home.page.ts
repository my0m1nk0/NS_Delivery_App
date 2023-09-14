import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';
register();
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{
  swiperModules =[IonicSlides];

  banners:any[]=[];
  stores:any[]=[];

  constructor() { }

  ngOnInit() {
    this.banners = [
      {banner:'assets/imgs/1.jpg'},
      {banner:'assets/imgs/2.jpg'},
      {banner:'assets/imgs/3.jpg'},
      {banner:'assets/imgs/4.jpg'}
      ];
    this.stores=[
      {id:1,name:'Restaurant',icon:'shop2.jpg'},
      {id:2,name:'Grocery',icon:'grocery.jpg'},
      {id:3,name:'Medicines',icon:'med2.jpg'},
      {id:4,name:'Paan Shop',icon:'paan.jpg'},
      {id:5,name:'Meat & Fish',icon:'meat.jpg'},
      {id:6,name:'Gifts',icon:'gifts.jpg'},
      {id:7,name:'Pet Supplies',icon:'pet_asset.jpg'},
    ]
  }

}
