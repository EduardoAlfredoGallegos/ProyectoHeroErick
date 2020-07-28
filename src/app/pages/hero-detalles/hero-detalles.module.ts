import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroDetallesPageRoutingModule } from './hero-detalles-routing.module';

import { HeroDetallesPage } from './hero-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroDetallesPageRoutingModule
  ],
  declarations: [HeroDetallesPage]
})
export class HeroDetallesPageModule {}
