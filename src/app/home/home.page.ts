import { Component } from '@angular/core';
import { HerosServiceService } from '../services/heros-service.service';
import { Heroe } from '../interfaces/hero.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  heroe: Heroe[];

  constructor(private heroeservice: HerosServiceService) {}

  ngOnInit(){
    this.heroeservice.getAllHeros().subscribe(res => {
      this.heroe = res;
      console.log(this.heroe);
    });
  }

}
