import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetallesPage } from './hero-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: HeroDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroDetallesPageRoutingModule {}
